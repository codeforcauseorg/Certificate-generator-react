import { AppBar, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CsvReader from '../../components/csv'
import MainLayout from '../../layout'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    textAlign: 'center'
  },
  heading: {
    fontSize: 40,
    fontWeight: 700,
    color: theme.palette.primary.main,
    padding: theme.spacing(3, 0, 6)
  }
}))

const CsvUpload = () => {
  const classes = useStyles()

  return (
    <MainLayout>
      <div className={classes.root}>
        <Typography align="center" className={classes.heading}>
          Please Import Your CSV File Here
        </Typography>
        <CsvReader />
      </div>
    </MainLayout>
  )
}

export default CsvUpload
