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
import clsx from 'clsx'
import jsPDF from 'jspdf'
import React, { useEffect, useRef, useState } from 'react'
import { drawerWidth } from '../../constants'
import ButtonComponent from '../Button'

const useStyles = makeStyles((theme) => ({
  root: {
    // textAlign: 'center',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5)
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
  },
  btn: {
    margin: theme.spacing(2, 1, 0),
    padding: theme.spacing(1.5, 2)
  }
}))

function CertificateGeneratorByImage() {
  const classes = useStyles()
  const canvas = useRef()
  let ctx = null

  const defaultValue = { x: 289, y: 200, size: 37 }

  const [textDrawProperties, setTextDrawProperties] = useState(defaultValue)
  const [open, setOpen] = React.useState(true)

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
  })

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
    // var {x, y} = cordinates
    const canvasEle = canvas.current
    ctx = canvasEle.getContext('2d')
    var imageObj1 = new Image()
    imageObj1.src = 't1.png'
    imageObj1.onload = function () {
      ctx.drawImage(imageObj1, 0, 0)
      ctx.font = `${textDrawProperties.size}pt Ubuntu`
      ctx.fillStyle = 'white'
      ctx.fillText('Abhishek Kumar', textDrawProperties.x, textDrawProperties.y)
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
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.appBarShift]: open
      })}
    >
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
        <ButtonComponent
          className={classes.btn}
          title="Reset To Default"
          onClick={() => {
            resetToDefault()
          }}
        ></ButtonComponent>
        <Divider />
        <ButtonComponent
          className={classes.btn}
          title="Download"
          style={{
            backgroundColor: '#03506a'
          }}
          onClick={() => {
            const c = canvas.current
            downloadPdf(c.toDataURL('png'), 'certificate-pdf')
            downloadImage(c.toDataURL('png'), 'certificate-image')
          }}
        />
        <Divider style={{ marginTop: '35vh' }} />
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

      <canvas ref={canvas}></canvas>
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

export default CertificateGeneratorByImage
