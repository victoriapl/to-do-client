import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import Add from './components/add/Add'
import Done from './components/done/Done';

const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={Home} />
    <Route exact path={'/add'} component={Add} />
    <Route exact path={'/done'} component={Done} />
    <Route component={() => <p>404</p>} />
  </Switch>
)

export default Routes