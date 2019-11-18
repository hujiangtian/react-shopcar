import React, { Component } from 'react'
import request from '../../utils/request'
import qs from 'querystring'
import './index.scss'
import {Link} from 'react-router-dom'

export default class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       shopList:[]
    }
  }
  

  componentDidMount(){
    const {cid}=qs.parse(this.props.location.search.slice(1))
    request({
      url:'/index.php',
      params:{
        r: 'class/cyajaxsub',
        page: 1,
        cid,
        px: 't',
        cac_id:''
      }
    }).then(res=>{
      this.setState({
        shopList:res.data.data.content
      })
    })
  }

  renderItem=()=>{
    return this.state.shopList.map(item=>{
      return(
        <li key={item.id}>
          <Link to={{
            pathname:'/detail',
            search:qs.stringify(item)
          }}>
            <div className="img-box">
              <img src={item.pic}/>
            </div>
            <div className="content-box">
              <h3>{item.d_title}</h3>
              <p>券后 <em><i>￥</i>{item.jiage}</em></p>
              <span> 券{item.quan_jine} </span>
              <i>已售 {item.xiaoliang} | 评论 {item.comment} </i>
            </div>
          </Link>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="content-box">
        <ul className="shop-list">
          {this.renderItem()}
        </ul>
      </div>
    )
  }
}