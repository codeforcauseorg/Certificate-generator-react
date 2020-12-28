import { makeStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { CSVReader } from 'react-papaparse'

const useStyles = makeStyles((theme) => ({
  root: {

  }
}))

const CsvReaderComponent = () => {
  const classes = useStyles()

  const handleOnDrop = (data, file) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
    console.log(file.name)
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log("error here---------------******")
    console.log("file: " + file)
    console.log(err)
  }

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }

  return (
    <CSVReader      
      onDrop={handleOnDrop}
      onError={handleOnError}
      addRemoveButton
      onRemoveFile={handleOnRemoveFile}
    >
      <span>Click or drop your csv file here</span>
    </CSVReader>
  )
}

export default CsvReaderComponent;