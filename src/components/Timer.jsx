import React from "react";

const Timer = ({ minutesLeft, secondsLeft }) => {
  return (
    <div id="timer-label">
      Time Left
      <h1 id="time-left">
        {minutesLeft}:{("0" + secondsLeft).slice(-2)}
      </h1>
    </div>
  );
};

export default Timer;
