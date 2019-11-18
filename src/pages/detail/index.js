import React, { Component } from 'react'
import './index.scss'
import qs from 'querystring'
import Input from './input'

export default class Detail extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       num:1
    }
  }
  
  changeNum=(num)=>{
    this.setState({num})
  }

  submit=()=>{
    const data=qs.parse(this.props.location.search)
    let shop=localStorage.getItem('shop')?localStorage.getItem('shop'):[];
    if(shop.length!=0){
      shop=JSON.parse(shop)
      const f=shop.some(item=>item.id==data.goodsid)
      if(f){
        shop.map(item=>{
          if(item.id==data.goodsid){
            item.num+=this.state.num
          }
        })
        localStorage.setItem('shop',JSON.stringify(shop))
        this.props.history.push('/mine')
      }else{
        this.addShop(data,shop)
      }    
    }else{
     this.addShop(data,shop)
    }
  }
  
  addShop=(data,shop)=>{
    const item={
      id:data.goodsid,
      img:data.pic,
      title:data.d_title,
      price:data.jiage,
      num:this.state.num
    }
    shop.push(item)
    localStorage.setItem('shop',JSON.stringify(shop))
    this.props.history.push('/mine')
  }
  render() {
    const data=qs.parse(this.props.location.search)
    // console.log(data)
    return (
      <div className="content-box">
        <div className="detail-box">
          <div className="img-box">
            <img src={data.pic}/>
          </div>
          <p> {data.d_title} </p>
          <ul className="detail">
            <li className="price">
              <span>券后价 ￥<strong>{data.jiage}</strong> </span>
            </li>
            <li className="number">
              <span>已售<i>{data.xiaoliang}</i>件</span>
            </li>
            <li className="yuanjia">
              <span>天猫价 ￥<del>{data.yuanjia}</del> </span>
            </li>
            <li className="others">
              <span>包邮 运费险</span>
            </li>
          </ul>
          <Input num={this.state.num} changeNum={this.changeNum} submit={this.submit}></Input>
        </div>
      </div>
    )
  }
}