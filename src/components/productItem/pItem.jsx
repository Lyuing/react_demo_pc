import React, {useEffect, useState} from 'react'
import style from './pItem.module.css';

export default function PItem(props) {
  let [count, setCount] = useState(0)
  let format = (t)=>{
    if(!t) return '';
    let date = new Date(t)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let dat = date.getDate()
    return `${year}-${month}-${dat}`
  }
  let handleCount = ()=>{
    setCount(count+1)
  }

  useEffect(()=>{
    let dt = document.title
    document.title = `购物车容量： ${count}`
    return function () {
      document.title = dt
    }
  })
  return (
    <div>
      <div className={style.id +' '+ style.item}>{props.id}</div>
      <div className={style.name +' '+ style.item}>{props.name}</div>
      <div className={style.item}>{format(props.create)}</div>
      <div className={style.item}>{count}</div>
      <div className={style.item}><button onClick={handleCount}>添加购物车</button></div>
    </div>
  )
}
