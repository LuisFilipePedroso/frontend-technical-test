import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Events from './pages/Events'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Events} />
      </Switch>
    </BrowserRouter>
  )
}
