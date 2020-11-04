import React from 'react';
// import style from './login.module.css';
import './login.css';
import api from '../../sdk'

class Login extends React.Component {

  state = {
    name: '',
    password: '',
    upName: '',
    upPassword: '',
    isSignIn: true,     // 登录窗口
  }
  postLogin = ()=>{
    let {name, password} = this.state
    api.login(name, password).then(res=>{
      // console.log(res)
      // console.log(this.props, this.props.route)
      this.props.route.history.push('/view')
      // 登录
    }).catch(err=>{
      console.log(err)
    })
  }
  postSignUp = ()=>{
    let {upName, upPassword} = this.state
    api.signup(upName, upPassword).then(res=>{
      console.log(res)
      // 注册
    }).catch(err=>{
      console.log(err)
    })
  }
  onChangeName = (e, type)=>{
    let key = type ? 'upName' : 'name'
    this.setState({
      [key]: e.target.value
    })
  }
  onChangePassword = (e, type)=>{
    let key = type ? 'upPassword' : 'password'
    this.setState({
      [key]: e.target.value
    })
  }
  onKey = (e, type)=>{
    e.persist()
    let code = e.keyCode
    if(code === 13){
      // console.log(e, type)
      // 回车
      type ? this.postSignUp():
        this.postLogin()
    }
  }
  onSignUp = ()=>{
    // 注册
    this.setState({
      isSignIn: false
    })
  }
  onSignIn = ()=>{
    // 登录
    this.setState({
      isSignIn: true
    })
  }
  render() {
    let {name, password, upName, upPassword} = this.state
    let SignIn = (
      <div className={`inner ${ this.state.isSignIn ?'': 'x-lt'}`}>
        <p className="login-title">{this.props.children || '登录'}</p>
        {/* <p className={style['login-title']}>登录</p> */}
        <div className="login-box">
          <label htmlFor="name" className="login-item">
            <span className="extends_tip">账号：</span>
            <input 
              className="input" 
              id="name" 
              type="text" 
              value={name} 
              onChange={this.onChangeName}
              onKeyUp={this.onKey}
              />
          </label>
          <label htmlFor="pwd" className="login-item">
            <span>密码：</span>
            <input
              className="input"
              id="pwd" 
              type="password" 
              value={password} 
              onChange={this.onChangePassword}
              onKeyUp={this.onKey}
            />
          </label>
        </div>
        <button className="button" onClick={this.postLogin}>登录</button>
        <p className="login-tip" onClick={this.onSignUp}>极速注册</p>
      </div>
    );
    let SignUp = (
      <div className={`inner rt ${ this.state.isSignIn ?'': 'x-lt'}`}>
        <p className="login-title">注册</p>
        <div className="login-box">
          <label htmlFor="upName" className="login-item">
            <span>账号：</span>
            <input 
              className="input" 
              id="upName" 
              type="text" 
              value={upName} 
              onChange={ e=> this.onChangeName( e, "signup")}
              onKeyUp={e => this.onKey(e, "signup")}
              />
          </label>
          <label htmlFor="upPwd" className="login-item">
            <span>密码：</span>
            <input
              className="input"
              id="upPwd" 
              type="password" 
              value={upPassword} 
              onChange={e=> this.onChangePassword( e, "signup")}
              onKeyUp={e => this.onKey(e, "signup")}
            />
          </label>
        </div>
        <button className="button" onClick={this.postSignUp}>注册</button>
        <p className="login-tip" onClick={this.onSignIn}>返回登录</p>
      </div>
    );
    return (
      <div className="login-container">
        {SignIn}
        {SignUp}
      </div>
    )
  }

}

export default Login;