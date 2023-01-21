import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sangeetha",
    };
    console.log("LifeCycleB constructor called");
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps called");
    return null;
  }

  render() {
    console.log("LifeCycleB render called");
    return <div>LifeCycleB</div>;
  }
}
