import React, { Component } from 'react'
import style from './Auth.module.css';
import Login from '../../components/login/login';

export default class Auth extends Component {
  render() {
    // console.log(this.props);
    return (
      <header className={style.wrap}>
        <Login route={this.props}>登 录</Login>
      </header>
    )
  }
}
