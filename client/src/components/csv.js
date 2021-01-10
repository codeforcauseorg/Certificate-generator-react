import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import React, { useReducer, useState } from 'react'
import { CSVReader } from 'react-papaparse'
import Table from './table'
import { Link } from 'react-router-dom'
import Autocomplete from '@material-ui/lab/Autocomplete'

// import
const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    marginTop: '20px',
    padding: '8px 24px',
    backgroundColor: 'pink'
  },
  box: {
    backgroundColor: '#ee6401',
    width: 'max-content',
    padding: '12px 18px',
    borderRadius: '6px',
    marginTop: '32px',
    margin: 'auto'
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    width: 'max-content',
    display: 'block',
    margin: 'auto'
  }
}))

const CsvReaderComponent = () => {
  const classes = useStyles()

  const [csvData, setCsvData] = useState(null)
  const [columns, setColumns] = useState(null)
  const [selectedData, setSelectedData] = useState([])

  const mapColumns = (cols) => {
    const colArray = []
    cols.map((col, index) => {
      return colArray.push({ index: index, column: col })
    })
    setColumns(colArray)
  }

  const handleOnDrop = (data, file) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')

    const dataArray = []

    data.map((element) => {
      return dataArray.push(element.data)
    })

    setCsvData(dataArray)
    mapColumns(dataArray[0])

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

  const show = (newValue) => {
    console.log('hei')
    console.log(newValue)
    const selectedDataForCerts = []
    if (newValue.length !== 0) {
      csvData.map((arrayItem, index) => {
        const item = []
        newValue.map(({ column, index }, i) => {
          const obj = {}
          obj.csvIdx = index
          obj.index = i
          obj.title = arrayItem[index]
          item.push(obj)
        })
        selectedDataForCerts.push(item)
      })
    }
    setSelectedData(selectedDataForCerts)
    console.log(columns)
    console.log(newValue)
    console.log(selectedDataForCerts)
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
      {columns === null ? (
        ''
      ) : (
        <Autocomplete
          style={{ margin: '32px auto', width: '80%' }}
          multiple
          id="tags-outlined"
          options={columns}
          getOptionLabel={(option) => option.column}
          onChange={(event, newValue) => {
            show(newValue)
            // setSelectedColumns(newValue)
          }}
          // filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Select Columns"
            />
          )}
        />
      )}

      {selectedData.length === 0 ? (
        <Box className={classes.box}>
          {csvData === null
            ? 'First, Import Csv File'
            : 'Please select columns'}
        </Box>
      ) : (
        <Link
          to={{ pathname: '/image-canvas', state: selectedData }}
          className={classes.link}
        >
          <Box className={classes.box}>
            {selectedData.length === 0 ? 'Please select columns' : "Let's Go"}
          </Box>
        </Link>
      )}

      {csvData === null ? (
        ''
      ) : (
        <div style={{ marginTop: '80px' }}>
          <Typography>Table Preview</Typography>
          <Table {...csvData} />
        </div>
      )}
      <Box height="120px" />
    </Container>
  )
}

export default CsvReaderComponent
