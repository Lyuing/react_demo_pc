import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom';
import React, {Component} from 'react';
import Auth from '../view/Auth/Auth'
import View from '../view/View'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={withRouter(Auth)} />
          <Route exact path="/view" component={withRouter(View)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;