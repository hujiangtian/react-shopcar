import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
export default class HomeNav extends Component {

  render() {
    return (
      <div className="nav-box">
        <div className="nav-l">
          <li>杭州</li>
          <i className="fas fa-caret-down"></i>
        </div>
        <div className="nav-m">
          <NavLink to="/home/homehot" activeClassName="active">正在热映</NavLink>
          <NavLink to="/home/homecoming" activeClassName="active">即将上映</NavLink>
        </div>
        <div className="nav-r">
          <li className="fas fa-search"></li>
        </div>
      </div>
    );
  }
}