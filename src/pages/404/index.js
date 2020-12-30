import { Typography } from '@material-ui/core'
import React from 'react'

const Error404 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '30vh' }}>
      <Typography variant="h3">{'Wrong page'.toLocaleUpperCase()}</Typography>
      <Typography variant="h6">Available routes are</Typography>
      <Typography>/image-canvas</Typography>
      <Typography>/csv-upload</Typography>
    </div>
  )
}

export default Error404
