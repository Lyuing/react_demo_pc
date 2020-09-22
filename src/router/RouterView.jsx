import React, {Component} from "react"
import {Switch, Route, Redirect} from 'react-router-dom'

class RouterView extends Component {
  render () {
    let { routes } = this.props;
    console.log(routes)
    console.log('routes')
    return (
      <Switch>
        {
          routes.map((item, key)=> {
            console.log('item', item)
            return !item.redirect ? 
              <Route path={item.path} key={key} exact={item.exact} render={ 
                props => <item.component {...props} routes={item.children} />
              } /> :
              <Redirect from={item.path} to={item.redirect} key={key}/>
          })
        }
      </Switch>
    )
  }
}

export default RouterView