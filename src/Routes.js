import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import CsvUpload from './pages/csv/csvUpload'
import ImageCanvas from './pages/ImageCanvas'
import Error404 from './pages/404'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/csv-upload" component={CsvUpload} />
      <Route exact path="/image-canvas" component={ImageCanvas} />

      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>
)

export default Routes
