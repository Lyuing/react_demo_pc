import React, { Component } from 'react';
import style from './Menu.module.css';

class Menu extends Component {
  state = {  }
  render() { 
    return (
      <div className={style.container}>
        <div className={style.menus}>
          <div className={style.menu_item}>概要</div>
          <div className={style.menu_item}>产品</div>
          <div className={style.menu_item}>权限管理</div>
        </div>
      </div>
    );
  }
}
 
export default Menu;