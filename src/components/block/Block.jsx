import React, { Component } from 'react'
import style from './Block.module.css'
import RouterView from '../../router/RouterView'

export class Block extends Component {
  render() {
    return (
      <div className={style.block}>
        <div className={style.bread}>
          <RouterView routes={this.props.routes}/>
        </div>
      </div>
    )
  }
}

export default Block
