import React, { Component } from 'react'
import style from "./Head.module.css";

export class Head extends Component {
  render() {
    return (
      <div className={style.head_bg}>
        <h4 className={style.head_name}>管理系统</h4>
      </div>
    )
  }
}

export default Head
