export class Webcam {
  open = (videoRef, onLoaded) => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: 'environment',
          },
        })
        .then((stream) => {
          window.localStream = stream
          videoRef.value.srcObject = stream
          videoRef.value.onloadedmetadata = () => {
            onLoaded()
          }
        })
    }
    else { alert('Can\'t open Webcam!') }
  }

  close = (videoRef) => {
    if (videoRef.value.srcObject) {
      videoRef.value.srcObject = null
      window.localStream.getTracks().forEach((track) => {
        track.stop()
      })
    }
    else { alert('Please open Webcam first!') }
  }
}

