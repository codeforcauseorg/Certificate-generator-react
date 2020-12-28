import { makeStyles } from '@material-ui/core';
import React from 'react'
import CsvReader from '../../components/csv'

const useStyles = makeStyles((theme) => ({
  root: { }
}))

const CsvUpload = () => {
  const classes = useStyles()

  return (
    <CsvReader />
  )
}

export default CsvUpload