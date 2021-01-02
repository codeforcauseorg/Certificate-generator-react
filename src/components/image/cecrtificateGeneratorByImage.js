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
import templates from '../../data'

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
    margin: '20px 4px 0px',
    backgroundColor: '#f7f7f7',
    width: '120px'
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

  const currentValue = templates.png[0].text

  const [textDrawProperties, setTextDrawProperties] = useState(currentValue)
  const [open, setOpen] = React.useState(true)

  console.log(textDrawProperties)
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
      textDrawProperties.map((text) => {
        ctx.font = `${text.size}pt Ubuntu`
        ctx.fillStyle = 'white'
        ctx.fillText(text.title, text.x, text.y)
      })
    }
  }

  const handleChange = (index) => (e) => {
    let newArray = [...textDrawProperties]
    newArray[index][e.target.name] = e.target.value
    setTextDrawProperties(newArray)
  }

  const resetToDefault = () => {
    window.location.reload()
  }

  const addField = () => {
    setTextDrawProperties([
      ...textDrawProperties,
      {
        title: 'Title',
        x: Math.floor(Math.random() * 100) + 80,
        y: Math.floor(Math.random() * 100) + 80,
        size: 50
      }
    ])
  }

  const removeField = (index) => {
    let arr = [...textDrawProperties]
    arr.splice(index, 1)
    setTextDrawProperties(arr)
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
        <ul>
          {textDrawProperties.map((properties, index) => (
            <li key={index}>
              <div style={{ display: 'block', marginTop: '20px' }}>
                <TextField
                  name="title"
                  value={properties.title}
                  onChange={handleChange(index)}
                />
                <Fab
                  variant="extended"
                  size="small"
                  style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    color: 'white'
                  }}
                  onClick={() => removeField(index)}
                >
                  {/* <RemoveIcon /> */}
                  <Typography variant="caption" style={{ fontWeight: 600 }}>
                    Delete
                  </Typography>
                </Fab>
              </div>
              <TextField
                className={classes.textField}
                value={properties.x}
                name="x"
                id="outlined-numberX"
                label="X"
                type="number"
                onChange={handleChange(index)}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                id="outlined-numberY"
                name="y"
                value={properties.y}
                label="Y"
                type="number"
                onChange={handleChange(index)}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                id="fontSize"
                name="size"
                label="Size"
                value={properties.size}
                type="number"
                onChange={handleChange(index)}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </li>
          ))}
        </ul>
        <ButtonComponent
          title="Add Field"
          className={classes.btn}
          onClick={addField}
        />
        <ButtonComponent
          className={classes.btn}
          title="Reset To Default"
          onClick={() => {
            resetToDefault()
          }}
        ></ButtonComponent>
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
        <Divider style={{ marginTop: '0vh' }} />
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
