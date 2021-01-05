import { AppBar, Typography } from '@material-ui/core'
import React from 'react'
import CertificateGeneratorByImage from '../../components/image/cecrtificateGeneratorByImage'

const ImageCanvas = (props) => {
  if (props.location.state === undefined) {
    return <div>Please select Data Fields from the previous page</div>
  }

  return (
    <div>
      <AppBar style={{ height: '48px' }}>
        <Typography variant="h3" style={{ margin: '10px 10px 0px' }}>
          Certificate Generator
        </Typography>
      </AppBar>
      <CertificateGeneratorByImage data={props.location.state} />
    </div>
  )
}

export default ImageCanvas
