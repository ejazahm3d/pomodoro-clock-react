import React, { Component } from "react";
import SessionLabel from "./SessionLabel";
import BreakLabel from "./BreakLabel";
import Timer from "./Timer";
import TimerControl from "./TimerControl";

class App extends Component {
  state = {
    sessionLength: 25,
    breakLength: 5,
    minutesLeft: 25,
    clockRunning: false
  };
  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }

  onBreakClick = type => {
    this.setState(prevState => ({
      breakLength:
        type === "inc" ? prevState.breakLength + 1 : prevState.breakLength - 1
    }));
  };
  onSessionClick = type => {
    this.setState(prevState => ({
      sessionLength:
        type === "inc"
          ? prevState.sessionLength + 1
          : prevState.sessionLength - 1,
      minutesLeft:
        type === "inc" ? prevState.minutesLeft + 1 : prevState.minutesLeft - 1
    }));
  };

  onResetClick = () => {
    this.setState({ sessionLength: 25, breakLength: 5, timeLeft: 25 });
  };

  render() {
    return (
      <div className="App container">
        <h1>Pomodoro Clock</h1>
        <BreakLabel
          breakLength={this.state.breakLength}
          onBreakClick={this.onBreakClick}
        />
        <SessionLabel
          sessionLength={this.state.sessionLength}
          onSessionClick={this.onSessionClick}
        />
        <Timer timeLeft={this.state.minutesLeft} />
        <TimerControl onResetClick={this.onResetClick} />
      </div>
    );
  }
}

export default App;
