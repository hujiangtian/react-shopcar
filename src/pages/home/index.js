import React, { Component } from "react";
import "./index.scss";
import HomeNav from "./HomeNav";
import { Route, Redirect } from "react-router-dom";
import HomeHot from "./HomeHot";
import HomeComing from "./HomeComing";

export default class Home extends Component {
  render() {
    return (
      <div className="content-box">
        <HomeNav></HomeNav>
        <Redirect to="/home/homehot" from="/home"></Redirect>
        <Route path="/home/homehot" component={HomeHot}></Route>
        <Route path="/home/homecoming" component={HomeComing}></Route>
      </div>
    );
  }
}