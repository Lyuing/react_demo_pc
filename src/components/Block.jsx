import React, { Component } from 'react'
import style from './Block.module.css'

export class Block extends Component {
  render() {
    return (
      <div className={style.block}>
        <div className={style.bread}>首页</div>
      </div>
    )
  }
}

export default Block
