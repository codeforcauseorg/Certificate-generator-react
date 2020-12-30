import { Button, makeStyles } from '@material-ui/core'
import { saveAs } from 'file-saver'
import * as pdfLib from 'pdf-lib'
import React from 'react'

const { PDFDocument, rgb, StandardFonts } = pdfLib

const useStyles = makeStyles((theme) => ({
  root: {}
}))

const CertificateGeneratorWithPdf = () => {
  const classes = useStyles()

  return (
    <Button
      onClick={() => {
        const val = 'Abhishek Kumar'
        //check if the text is empty or not
        if (val.trim() !== '') {
          // console.log(val);
          generatePDF(val)
        } else {
          console.log('Empty String')
        }
      }}
    >
      Click Me!
    </Button>
  )
}

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  )

const generatePDF = async (name) => {
  const existingPdfBytes = await fetch('t2.pdf').then((res) =>
    res.arrayBuffer()
  )

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  // pdfDoc.registerFontkit(fontkit);

  // //get font
  // const fontBytes = await fetch("Source Serif Pro").then((res) =>
  //   res.arrayBuffer()
  // );

  // Embed our custom font in the document
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  // Get the first page of the document
  const pages = pdfDoc.getPages()
  const firstPage = pages[0]

  firstPage.drawText(name, {
    x: 220,
    y: 360,
    size: 50,
    font: helveticaFont,
    color: rgb(0.7, 0.625, 0.35)
  })

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save()
  console.log('Done creating')

  var file = new File([pdfBytes], 'CfcCertificate.pdf', {
    type: 'application/pdf;charset=utf-8'
  })
  saveAs(file)
}

export default CertificateGeneratorWithPdf
