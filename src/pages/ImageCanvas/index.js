import { AppBar, Typography } from '@material-ui/core'
import React from 'react'
import CertificateGeneratorByImage from '../../components/image/cecrtificateGeneratorByImage'

const ImageCanvas = () => (
  <div>
    <AppBar style={{ height: '48px' }}>
      <Typography variant="h3" style={{ margin: '10px 10px 0px' }}>
        Certificate Generator
      </Typography>
    </AppBar>
    <CertificateGeneratorByImage />
  </div>
)

export default ImageCanvas
