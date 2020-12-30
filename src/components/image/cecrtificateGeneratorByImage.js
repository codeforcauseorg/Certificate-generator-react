import { Button } from '@material-ui/core'
import React, { useRef, useEffect } from 'react'
import jsPDF from 'jspdf'

function CertificateGeneratorByImage() {
  const canvas = useRef()
  let ctx = null

  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current
    var imageObj1 = new Image()
    imageObj1.src = 't1.png'
    imageObj1.onload = function () {
      canvasEle.width = imageObj1.width
      canvasEle.height = imageObj1.height
      console.log(imageObj1.height + '--------' + imageObj1.width)
    }
    // get context of the canvas
    ctx = canvasEle.getContext('2d')
  }, [])

  useEffect(() => {
    updateCanvas()
  }, [])

  function downloadImage(uri, name) {
    var link = document.createElement('a')
    link.download = name
    link.href = uri
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  function downloadPdf(uri, name) {
    const pdf = new jsPDF({ orientation: 'landscape' })
    const imgProps = pdf.getImageProperties(uri)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
    console.log(pdfHeight + '*********' + pdfWidth)
    pdf.addImage(uri, 'JPEG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(`${name}.pdf`)
  }

  function updateCanvas() {
    var imageObj1 = new Image()
    imageObj1.src = 't1.png'
    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, 0, 0)
      ctx.font = '30pt Ubuntu'
      ctx.fillStyle = 'white'
      ctx.fillText('Abhishek Kumar', 285, 200)
    }
  }

  return (
    <div>
      <Button
        onClick={() => {
          const c = document.getElementById('canvasa')
          console.log(c.toDataURL('png'))
          downloadPdf(c.toDataURL('png'), 'certificate-pdf')
          downloadImage(c.toDataURL('png'), 'certificate-image')
          // window.open(c.toDataURL('png'))
        }}
      >
        Download
      </Button>
      <canvas ref={canvas} id="canvasa"></canvas>
    </div>
  )
}

export default CertificateGeneratorByImage
