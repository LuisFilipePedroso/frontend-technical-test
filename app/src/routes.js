import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import EventList from './pages/EventList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={EventList} />
      </Switch>
    </BrowserRouter>
  );
}
