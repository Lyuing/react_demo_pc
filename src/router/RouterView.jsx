import React, {Component} from "react"
import {Switch, Route, Redirect} from 'react-router-dom'

class RouterView extends Component {
  render () {
    let routes = this.props.routes || [];
    console.log('routes', routes)
    return (
      <Switch>
        {
          routes.map((item, index)=> {
            console.log('item', item)
            return !item.redirect ? 
              <Route path={item.path} key={index} exact={item.exact} render={ 
                props => <item.component {...props} routes={item.children} />
              } /> :
              <Redirect from={item.path} to={item.redirect} key={index}/>
          })
        }
      </Switch>
    )
  }
}

export default RouterView