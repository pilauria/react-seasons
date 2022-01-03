import React, { Component } from 'react';

export default class Clock extends Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    // ****
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // ****
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }

  render() {
    return <div>The time is {this.state.time}</div>;
  }
}

// **** When a component's output is first inserted into the DOM it will trigger a hook called  componentDidMount , and when it's removed from the DOM it will trigger one called  componentWillUnmount . Let's use these to setup our clock when the component is mounted, and to remove our interval when the component is unmounted, so that the interval doesn't hog memory after it's no longer in use
