import React, {Component} from "react"
import {Switch, Route, Redirect} from 'react-router-dom'

import NotFound from '../view/notFound'

class RouterView extends Component {
  render () {
    let routes = this.props.routes || [];
    console.log('routes', routes)

    let routesList = routes.filter(i=>!i.redirect)
    let redirectRoutesList = routes.filter(i=>i.redirect).map((item, index)=> {
      return <Redirect from={item.path} to={item.redirect} exact={item.exact} strict={item.strict} key={index}/>
    } )
    return (
      <Switch>
        {
          routesList.map((item, index)=> {
            // console.log('item', item)
            return <Route path={item.path} key={index} exact={item.exact} strict={item.strict} render={ 
                props => <item.component {...props} routes={item.children} />
              } />
          }).concat(redirectRoutesList).concat([<Route key={999} component={NotFound} />])
        }
      </Switch>
    )
  }
}

export default RouterView