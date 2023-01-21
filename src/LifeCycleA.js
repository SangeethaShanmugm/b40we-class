import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sangeetha",
    };
    console.log("LifeCycleA constructor called");
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps called");
    return null;
  }

  render() {
    console.log("LifeCycleA render called");
    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB />
      </div>
    );
  }
}
