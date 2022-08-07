import labels from './labels.json'

export const renderBoxes = (canvasRef, threshold, boxes_data, scores_data, classes_data) => {
  console.log(canvasRef.height, canvasRef.width)
  const ctx = canvasRef.getContext('2d')
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  const font = '18px sans-serif'
  ctx.font = font
  ctx.textBaseline = 'top'

  for (let i = 0; i < scores_data.length; ++i) {
    if (scores_data[i] > threshold) {
      const klass = labels[classes_data[i]]
      const score = (scores_data[i] * 100).toFixed(1)

      let [x1, y1, x2, y2] = boxes_data.slice(i * 4, (i + 1) * 4)
      x1 *= canvasRef.width
      x2 *= canvasRef.width
      y1 *= canvasRef.height
      y2 *= canvasRef.height
      const width = x2 - x1
      const height = y2 - y1

      ctx.strokeStyle = '#00FF00'
      ctx.lineWidth = 2
      ctx.strokeRect(x1, y1, width, height)

      ctx.fillStyle = '#00FF00'
      const textWidth = ctx.measureText(`${klass} - ${score}%`).width
      const textHeight = parseInt(font, 10)
      ctx.fillRect(x1 - 1, y1 - (textHeight + 2), textWidth + 2, textHeight + 2)

      ctx.fillStyle = '#ffffff'
      ctx.fillText(`${klass} - ${score}%`, x1 - 1, y1 - (textHeight + 2))
    }
  }
}
