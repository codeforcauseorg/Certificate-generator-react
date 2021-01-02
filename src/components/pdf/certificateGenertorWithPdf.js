import {
  Divider,
  Drawer,
  Fab,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import CloseIcon from '@material-ui/icons/Close'
import EditIcon from '@material-ui/icons/Edit'
import { saveAs } from 'file-saver'
import * as pdfLib from 'pdf-lib'
import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { drawerWidth } from '../../constants'
import CustomButton from '../Button'

const { PDFDocument, rgb, StandardFonts } = pdfLib

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const useStyles = makeStyles((theme) => ({
  root: {},
  btn: {
    margin: theme.spacing(2, 1, 0),
    padding: theme.spacing(1.5, 2)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: 'grey'
  },
  drawerPaper: {
    width: drawerWidth
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(5),
    right: theme.spacing(5)
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // margin: theme.spacing(30, 1, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    cursor: 'pointer'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  textField: {
    marginTop: '20px',
    backgroundColor: '#f7f7f7'
  }
}))

const CertificateGeneratorWithPdf = () => {
  const classes = useStyles()
  const defaultValue = { name: 'Abhishek Kumar', x: 220, y: 360, size: 50 }

  const [pdf, setPdf] = useState(null)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [textDrawProperties, setTextDrawProperties] = useState(defaultValue)
  const [open, setOpen] = React.useState(true)

  useEffect(() => {
    generatePDF(textDrawProperties).then((arr) => setPdf(arr))
  }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function download() {
    if (pdf == null) {
      alert('No New Changes are made on template')
    } else {
      var file = new File([pdf], 'CfcCertificate.pdf', {
        type: 'application/pdf;charset=utf-8'
      })
      saveAs(file)
    }
  }

  const handleChange = (e) => {
    setTextDrawProperties({
      ...textDrawProperties,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name)
  }

  const resetToDefault = () => {
    setTextDrawProperties(defaultValue)
    generatePDF(defaultValue).then((arr) => setPdf(arr))
  }

  return (
    <div>
      {pdf !== null ? (
        <Document
          file={{ data: pdf }}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      ) : (
        <></>
      )}

      <Typography>Click on show pdf changes to see the made changes</Typography>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <TextField
          className={classes.textField}
          value={textDrawProperties.x}
          name="x"
          id="outlined-numberX"
          label="Horizontal Position"
          type="number"
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          id="outlined-numberY"
          name="y"
          value={textDrawProperties.y}
          label="Vertical Position"
          type="number"
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          id="fontSize"
          name="size"
          label="fontSize"
          value={textDrawProperties.size}
          type="number"
          onChange={handleChange}
          variant="outlined"
        />
        <CustomButton
          className={classes.btn}
          title="Show Pdf changes"
          style={{ backgroundColor: '#f9af28' }}
          onClick={() => {
            const val = 'Abhishek Kumar'
            //check if the text is empty or not
            if (val.trim() !== '') {
              // console.log(val);
              generatePDF(textDrawProperties).then((arr) => {
                setPdf(arr)
              })
            } else {
              console.log('Empty String')
            }
          }}
        />
        <CustomButton
          className={classes.btn}
          title="Reset To Default"
          onClick={() => {
            resetToDefault()
          }}
        ></CustomButton>
        <CustomButton
          style={{ backgroundColor: '#03506a' }}
          className={classes.btn}
          title="Download"
          onClick={() => {
            download()
          }}
        />
        <Divider style={{ marginTop: '25vh' }} />
        <div
          className={classes.drawerHeader}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <Typography style={{ display: 'inline' }}>Close</Typography>
        </div>
      </Drawer>
      {!open ? (
        <Fab
          className={classes.fab}
          color="primary"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? <CloseIcon /> : <EditIcon />}
        </Fab>
      ) : (
        <></>
      )}
    </div>
  )
}

const generatePDF = async (properties) => {
  const { name, x, y, size } = properties
  console.log('X:' + x + 'y: ' + y)
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
    x: parseInt(x),
    y: parseInt(y),
    size: parseInt(size),
    font: helveticaFont,
    color: rgb(0.7, 0.625, 0.35)
  })

  return await pdfDoc.save()
}

export default CertificateGeneratorWithPdf
