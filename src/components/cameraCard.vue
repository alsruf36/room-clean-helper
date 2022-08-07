<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-backend-webgl'
import { renderBoxes } from '~/utils/renderBox'
import Camera from '~/components/camera/Camera.vue'

const { t } = useLang()

const camera = ref<InstanceType<typeof Camera>>()

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
      .resizeBilinear(tf.browser.fromPixels(camera.value?.video), [modelWidth, modelHeight])
      .div(255.0)
      .expandDims(0)
  })

  await model.executeAsync(input).then((res: any) => {
    const [boxes, scores, classes] = res.slice(0, 3)
    const boxes_data = boxes.dataSync()
    const scores_data = scores.dataSync()
    const classes_data = classes.dataSync()
    renderBoxes(camera.value?.canvas, threshold, boxes_data, scores_data, classes_data)
    tf.dispose(res)
  })

  requestAnimationFrame(() => detectFrame(model))
  tf.engine().endScope()
}

const loadModel = async () => {
  tf.loadGraphModel(`${window.location.origin}/assets/${modelName}_web_model/model.json`, {
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
      
      detectFrame(yolov5)
    })
  })
}
</script>

<template>
  <div>
    <Camera class="w-[640px]" :resolution="{ width: 640, height: 640 }" ref="camera" autoplay @started="loadModel()" />
  </div>
</template>
