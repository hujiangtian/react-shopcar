    
import React from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'


const Tabbar = props =>{
  const tabbars=[
    {
      id:1,
      path:'/home',
      icon:'fa fa-home',
      text:'首页'
    },
    {
      id:2,
      path:'/cinema',
      icon:'fa fa-file',
      text:'影院'
    },
    {
      id:3,
      path:'/mine',
      icon:'fa fa-user',
      text:'我的'
    }
  ]
  function renderItem(){
    return tabbars.map(item=>{
      return (
        <li key={item.id}>
          <NavLink to={item.path} activeClassName="active">
            <i className={item.icon}></i>
            <span> {item.text} </span>
          </NavLink>
        </li>
      )
    })
  }
  return(
    <div className="tabbar">
      <ul className="tabbar-list">
       {renderItem()}
      </ul>
    </div>
  )
}
export default Tabbar