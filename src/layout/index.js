import React, { Component,Fragment } from 'react'
import Tab from '../components/common/tab'
import Tabbar from '../components/common/tabbar'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import WithAnimate from '../hoc/animateHoc'

import Home from '../pages/home'
import Cinema from '../pages/cinema'
import Mine from '../pages/mine'
import Error from '../pages/error'
import Login from '../pages/login'
import Register from '../pages/register'
import List from '../pages/list'
import Detail from '../pages/detail'

const HomeHoc = WithAnimate(Home)
const CinemaHoc = WithAnimate(Cinema)
const MineHoc = WithAnimate(Mine)
const ErrorHoc = WithAnimate(Error)
const LoginHoc = WithAnimate(Login)
const RegisterHoc = WithAnimate(Register)


 class LayOut extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       navFlag:false,
       title:{
         '/cinema':'影院',
         '/mine':'购物车',
         '/home':'猫眼电影',
         '/home/homehot':'猫眼电影',
         '/home/homecoming':'猫眼电影',
         '/list':'商品列表',
         '/detail':'商品详情'
       },
       arr:['/cinema','/mine','/error','/login','/register','/list','/detail']
    }
  }

  componentDidMount(){
    this.checkNavFlag()
  }
  
  componentWillReceiveProps(nextProps){
    this.checkNavFlag(nextProps)
  }

  checkNavFlag=(nextProps)=>{
    const {pathname}= nextProps && nextProps.location || this.props.location
    const f=this.state.arr.some(item=>item===pathname)
    if(f){
      this.setState({
        navFlag:true
      })
    }else{
      this.setState({
        navFlag:false
      })
    }
  }

  render() {
    const {navFlag,title}=this.state
    const {pathname}=this.props.location
    return (
      <Fragment>
        <Tab navFlag={navFlag} title={title[pathname]} {...this.props}></Tab>
        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home" component={HomeHoc}></Route>
          <Route path="/cinema" component={CinemaHoc}></Route>
          {/* <Route path="/cinema" render={()=><CinemaHoc></CinemaHoc>}></Route> */}
          <Route path="/mine" component={Mine}></Route>
          <Route path="/list" component={List}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/error" component={ErrorHoc}></Route>
          <Route path="/login" component={LoginHoc}></Route>
          <Route path="/register" component={RegisterHoc}></Route>
        </Switch>
        <Tabbar></Tabbar>
      </Fragment>
    )
  }
}

export default withRouter(LayOut)