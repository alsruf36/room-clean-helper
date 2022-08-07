<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as tf from '@tensorflow/tfjs'
import Camera from 'simple-vue-camera'
import { renderBoxes } from '~/utils/renderBox'
import { Webcam } from '~/utils/webcam'

const { t } = useLang()

const videoRef = ref(null)
const canvasRef = ref(null)
const webcam = new Webcam()

const loading = ref({
  loading: true,
  progress: 0,
})

const modelName = 'yolov5n'
const threshold = 0.25

const detectFrame = async (model: any) => {
  console.log('detectFrame')
  tf.engine().startScope()
  const [modelWidth, modelHeight] = model.inputs[0].shape.slice(1, 3)
  const input = tf.tidy(() => {
    return tf.image
      .resizeBilinear(tf.browser.fromPixels(videoRef.value), [modelWidth, modelHeight])
      .div(255.0)
      .expandDims(0)
  })

  await model.executeAsync(input).then((res: any) => {
    const [boxes, scores, classes] = res.slice(0, 3)
    const boxes_data = boxes.dataSync()
    const scores_data = scores.dataSync()
    const classes_data = classes.dataSync()
    renderBoxes(canvasRef, threshold, boxes_data, scores_data, classes_data)
    tf.dispose(res)
  })

  requestAnimationFrame(() => detectFrame(model))
  tf.engine().endScope()
}

onMounted(async () => {
  tf.loadGraphModel(`${window.location.origin}/${modelName}_web_model/model.json`, {
    onProgress: (fractions) => {
      loading.value.loading = true
      loading.value.progress = fractions
    },
  }).then(async (yolov5) => {
    const dummyInput = tf.ones(yolov5.inputs[0].shape)
    await yolov5.executeAsync(dummyInput).then((warmupResult) => {
      tf.dispose(warmupResult)
      tf.dispose(dummyInput)

      loading.value.loading = false
      loading.value.progress = 1
      webcam.open(videoRef, () => detectFrame(yolov5))
    })
  })
})
</script>

<template>
  <div>
    <div className="content">
      <video ref="videoRef" autoPlay playsInline muted />
      <canvas ref="canvasRef" width="640" height="640" />
    </div>
  </div>
</template>
