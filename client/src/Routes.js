import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import CsvUpload from './pages/csv/csvUpload'
import ImageCanvas from './pages/ImageCanvas'
import Error404 from './pages/404'
import PdfCert from './components/pdf/certificateGenertorWithPdf'
import Temp from './components/temp'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/csv-upload" />
      <Route exact path="/csv-upload" component={CsvUpload} />
      <Route exact path="/image-canvas" component={ImageCanvas} />
      <Route exact path="/pdf-cert" component={PdfCert} />
      <Route exact path="/temp" component={Temp} />
      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>
)

export default Routes
