import React from 'react'
import {CSSTransition} from 'react-transition-group'

const WithAnimate = Comp =>{
  return class _ extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         flag:false
      }
    }

    componentDidMount(){
      this.setState({
        flag:true
      })
    }

    render(){
      return(
        <CSSTransition
        in={this.state.flag}
        timeout={800}
        classNames={{
          enter: 'animated',
          enterActive: 'slideInLeft',
          exit: 'animated',
          exitActive: 'slideOutLeft',
         }}>
          <Comp></Comp>
        </CSSTransition>
      )
    }
    
  }
}

export default WithAnimate