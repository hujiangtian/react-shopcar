import React from 'react'
import { List, Stepper, Button } from 'antd-mobile';

export default class Input extends React.Component {

  // onChange = (val) => {
  //   // console.log(val);
  //   this.setState({ val });
  // }

  render() {
    return (
      <List>
        <List.Item
          wrap
          extra={
            <Stepper
            style={{ width: '100%', minWidth: '100px' }}
            showNumber
            max={10}
            min={1}
            value={this.props.num}
            onChange={this.props.changeNum}
            />}
        > 
        <Button type="warning" size="small" inline onClick={this.props.submit}>加入购物车</Button>
        </List.Item>
      </List>
    );
  }
}