import React from "react";

const Timer = ({ timeLeft }) => {
  return (
    <div id="timer-label">
      Time Left
      <h1 id="time-left">{timeLeft}</h1>
    </div>
  );
};

export default Timer;
