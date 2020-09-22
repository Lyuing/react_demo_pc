import React, { Component } from 'react'
import Head from '../components/head/Head'
import Menu from "../components/menu/Menu"
import Block from "../components/block/Block"

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
