import React, { Component } from 'react'
import Slider from './Slider'
import request from "../../utils/request";
import './index.scss'

export default class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    request({
      url: "/index.php",
      params: {
        r: "class/category",
        type: 1
      }
    }).then(res=>{
      res.data.data.data.map(item=>{
        item.title=item.name;
      })

      this.setState({
        lists: res.data.data.data
      })
    });
  }

  render() {
    const {lists} = this.state
    return (
      <div className="content-box">
        <Slider lists={lists}></Slider>
      </div>
    )
  }
}