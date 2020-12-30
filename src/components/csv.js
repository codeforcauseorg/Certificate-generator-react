import { Button, Container, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { CSVReader } from 'react-papaparse'
import Table from './table'

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    marginTop: '20px',
    padding: '8px 24px',
    backgroundColor: 'pink'
  }
}))

const CsvReaderComponent = () => {
  const classes = useStyles()

  const [csvData, setCsvData] = useState(null)

  const handleOnDrop = (data, file) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')

    const dataArray = []

    data.map((element) => {
      return dataArray.push(element.data)
    })

    setCsvData(dataArray)

    if (
      !(
        file.type === 'text/csv' ||
        file.type === '.csv' ||
        file.type === 'application/vnd.ms-excel'
      )
    ) {
      handleOnError(
        'File not compatible',
        file.name,
        file,
        'File not compatible, provide only csv parsable files'
      )
    }
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log('error here---------------******')
    console.log('file: ' + file)
    console.log(err)
  }

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    setCsvData(null)
    console.log('---------------------------')
  }

  const show = (data) => {
    console.log(typeof data)
    data.map((element) => {
      console.log(element)
    })
  }

  return (
    <Container>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Click or drop your csv file here</span>
      </CSVReader>
      <Button
        disabled={csvData === null}
        className={classes.button}
        onClick={() => {
          console.log('csvData:::' + show(csvData))
        }}
      >
        Let's Go
      </Button>
      {csvData === null ? <></> : <Table {...csvData} />}
    </Container>
  )
}

export default CsvReaderComponent
