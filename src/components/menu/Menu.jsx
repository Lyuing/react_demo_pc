import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import style from './Menu.module.css';

class Menu extends Component {
  navigateTo= (path)=>{
    console.log(path, this.props)
    this.props.history.push(path)
  }
  render() { 
    return (
      <div className={style.container}>
        <div className={style.menus}>
          <div className={style.menu_item} onClick={()=>{ this.navigateTo('/view')}}>概要</div>
          <div className={style.menu_item} onClick={()=>{ this.navigateTo('/view/product')}}>产品</div>
          <div className={style.menu_item} onClick={()=>{ this.navigateTo('/view/authority')}}>权限管理</div>
        </div>
      </div>
    );
  }
}
 
export default withRouter(Menu);