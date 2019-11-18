import React, { Component } from 'react'
import './index.scss'
import { Button } from 'antd-mobile'

export default class Mine extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      shopcar:[],
      sum:0,
      delid:null
    }
  }
  

  componentDidMount(){
   this.setState({
    shopcar:JSON.parse(localStorage.getItem('shop'))
   })
  
  }
  computed=()=>{
    let price=0;
    this.state.shopcar.map(item=>{
      price+=item.price*item.num;
    })
    return price.toFixed(2)
  }

  
  delItem=(e)=>{
    const id=e.target.getAttribute('data-id')
    // console.log(e.target)
    // console.log(e.target.getAttribute('data-id'))
    this.setState({
      shopcar:this.state.shopcar.filter(item=>item.id!=id)
    })
    const newShop=JSON.parse(localStorage.getItem('shop')).filter(item=>item.id!=id)
    localStorage.setItem('shop',JSON.stringify(newShop))
  }


  renderItem=()=>{
   return this.state.shopcar.map(item=>{
     return(
      <li key={item.id}>
        <div className="img-box">
          <a href="">
            <img src={item.img} alt=""/>
          </a>
        </div>
        <div className="content-box">
          <h3> { item.title } </h3>
          <p> 价格：{ item.price } </p>
          <p> 数量：{ item.num } </p>
        </div>
        <div className="del-btn">
          <Button type="warning" size="small" inline data-id={item.id} onClick={this.delItem}>删除</Button>
        </div>
      </li>
     )
   })
  }
  render() {
    const {shopcar} =this.state
    if(!shopcar){
      return (
        <div className="content-box">
          <p style={{'fontSize':'0.2rem','lineHeight':'0.6rem'}}>您的购物车是空的</p>
        </div>
      )
    }else{
      return (
        <div className="content-box">
          <div className="shopcar">
            <ul>
                {this.renderItem()}
            </ul>
            <div className="shopcar-b">
              <p> 总价：<span style={{color:'red'}}>￥{this.computed()}</span> </p>
              <Button type="primary" size="small" inline onClick={this.props.submit}>结算</Button>         
            </div>
          </div>
        </div>
      )
    }
   
  }
}