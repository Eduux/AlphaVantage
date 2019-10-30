import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <Switch>
    <Route exact path="/" component={() => <p>Home</p>} />
    {/* <Route path="/item/:id" component={() => <p>Home</p>} /> */}
  </Switch>
);
