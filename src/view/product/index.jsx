import React, { Component } from 'react'
import PItem from "../../components/productItem/pItem";
export default class Product extends Component {
  list = [
    {id:1, name: '张经理', create: 1604394996028, }
  ]
  render() {
    return (
      <div>
        <p>产品列表</p>
        {
          this.list.map(item=> <PItem {...item} key={item.id}/>)
        }
      </div>
    )
  }
}
