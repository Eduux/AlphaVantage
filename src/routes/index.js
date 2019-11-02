import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CompanyDetails from '../pages/CompanyDetails';
import CompanyGraphic from '../pages/CompanyGraphic';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/company/:id" component={CompanyDetails} />
    <Route path="/company-plot/:id" component={CompanyGraphic} />
  </Switch>
);
