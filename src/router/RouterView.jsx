import React, {Component} from "react"
import {Switch, Route, Redirect} from 'react-router-dom'

import NotFound from '../view/notFound'

class RouterView extends Component {
  render () {
    let routes = this.props.routes || [];
    console.log('routes', routes)
    return (
      <Switch>
        {
          routes.map((item, index)=> {
            // console.log('item', item)
            if (!item.path) return <Route component={NotFound} />
            return item.redirect ? 
              <Redirect from={item.path} to={item.redirect} key={index}/> :
              <Route path={item.path} key={index} exact={item.exact} render={ 
                props => <item.component {...props} routes={item.children} />
              } />
          }).concat([<Route key={999} component={NotFound} />])
        }
      </Switch>
    )
  }
}

export default RouterView