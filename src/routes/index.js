import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route path="/item/:id" component={() => <p>Home</p>} /> */}
  </Switch>
);
