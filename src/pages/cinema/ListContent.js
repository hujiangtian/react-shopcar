import React, { Component } from "react";
import {Link} from 'react-router-dom'
import qs from 'querystring'

export default class ListContent extends Component {
  // componentDidUpdate() {
  //   console.log(this.props);
  // }

  renderItem=()=>{
    return this.props.list.map(item=>{
      return(
        <li key={item.api_cid}>
          <Link to={{
            pathname:'/list',
            search:`cid=${item.api_cid}`
          }}>
            <img src={item.img}/>
            <span>{item.name}</span>
          </Link>
        </li>
      )
    })
  }

  render() {
    const { name } = this.props;
    return (
      <div className="list-item">
        <p className="item-title">{name}</p>
        <ul>
          {this.renderItem()}
        </ul>
      </div>
    );
  }
}