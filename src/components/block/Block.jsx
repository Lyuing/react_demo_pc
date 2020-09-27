import React, { Component } from 'react'
import style from './Block.module.css'

// import {viewRouteList} from '../../router'
import RouterView from '../../router/RouterView'


export class Block extends Component {
  render() {
    // console.log(viewRouteList)
    return (
      <div className={style.block}>
        <div className={style.bread}>
          {/* <RouterView routes={viewRouteList}/> */}
          <RouterView routes={this.props.routes}/>
        </div>
      </div>
    )
  }
}

export default Block
