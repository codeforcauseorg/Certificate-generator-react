import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '30vh' }}>
      <Typography variant="h3" color="primary">
        {'Wrong page'.toLocaleUpperCase()}
      </Typography>
      <Typography variant="h6">Available routes are</Typography>
      {['/image-canvas', '/csv-upload', '/pdf-cert'].map((str) => (
        <Link to={str}>
          <Typography>{str}</Typography>
        </Link>
      ))}
    </div>
  )
}

export default Error404
