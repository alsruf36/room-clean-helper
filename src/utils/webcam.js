export class Webcam {
  legacyGetUserMediaSupport = () => {
    return (constraints) => {
      // First get ahold of the legacy getUserMedia, if present
      const getUserMedia
        = navigator.getUserMedia
        || navigator.webkitGetUserMedia
        || navigator.mozGetUserMedia
        || navigator.msGetUserMedia
        || navigator.oGetUserMedia
      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(
          alert('getUserMedia is not implemented in this browser'),
          new Error('getUserMedia is not implemented in this browser'),
        )
      }
      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise((resolve, reject) => {
        getUserMedia.call(navigator, constraints, resolve, reject)
      })
    }
  }

  open = (videoRef, onLoaded) => {
    if (navigator.mediaDevices === undefined)
      navigator.mediaDevices = {}

    if (navigator.mediaDevices.getUserMedia === undefined)
      navigator.mediaDevices.getUserMedia = this.legacyGetUserMediaSupport()

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

