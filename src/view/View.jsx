import React, { Component } from 'react'
import Head from '../components/Head'
import Menu from "../components/Menu"
import Block from "../components/Block"

import style from "./view.module.css";

export class View extends Component {
  render() {
    return (
      <div className={style.wrap}>
        <Head></Head>
        <div className={style.layout}>
          <Menu/>
          <Block/>
        </div>
      </div>
    )
  }
}

export default View
