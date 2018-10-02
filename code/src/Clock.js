import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.startInterval();
  }

  startInterval = () => {
    this.tick();
    if(!this.timerID) {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
  }

  stopInterval = () => {
    clearInterval(this.timerID);
    this.timerID = undefined;
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div className="container">
        <div className="timer-container">
          <span className="time">{this.state.date.toLocaleTimeString()}</span>
        </div>
        <button className="button" onClick={this.startInterval}>start</button>
        <button className="button" onClick={this.stopInterval}>stop</button>
      </div>
    );
  }

}

export default Clock;
