import React, { useState, useEffect, useRef } from "react";
import SessionLabel from "./SessionLabel";
import BreakLabel from "./BreakLabel";
import Timer from "./Timer";
import TimerControl from "./TimerControl";

const App = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [minutesLeft, setMinutesLeft] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  let intervalId = useRef(null);

  useEffect(() => {
    freeCodeCampScripts();
  }, []);

  const freeCodeCampScripts = () => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  };
  const onBreakClick = type => {
    if (!isPaused) {
      setBreakLength(type === "inc" ? breakLength + 1 : breakLength - 1);
    }
  };
  const onSessionClick = type => {
    if (!isPaused) {
      setSessionLength(type === "inc" ? sessionLength + 1 : sessionLength - 1);
      setMinutesLeft(type === "inc" ? sessionLength + 1 : sessionLength - 1);
    }
  };

  const onResetClick = () => {
    setBreakLength(5);
    setSessionLength(25);
    setMinutesLeft(25);
    setSecondsLeft(0);
    setIsPaused(false);
    clearInterval(intervalId.current);
  };

  const onStartClick = () => {
    if (!isPaused) {
      setIsPaused(true);
      handleCountdown(minutesLeft, secondsLeft);
    } else if (isPaused) {
      setIsPaused(false);
      clearInterval(intervalId.current);
    }
  };

  const handleCountdown = (minutes, seconds) => {
    const minsToSeconds = minutes * 60 + seconds;

    const timer = seconds => {
      const now = Date.now();
      const then = now + seconds * 1000;
      displayTimeLeft(seconds);
      intervalId.current = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
          clearInterval(secondsLeft);
          return;
        }
        displayTimeLeft(secondsLeft);
      }, 1000);
    };
    const displayTimeLeft = seconds => {
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = seconds % 60;
      console.log({ minutes, remainderSeconds });
      setMinutesLeft(minutes);
      setSecondsLeft(remainderSeconds);
    };
    timer(minsToSeconds);
  };

  return (
    <div className="App container text-center">
      <h1 className="mb-5 text-secondary">Pomodoro Clock</h1>
      <BreakLabel breakLength={breakLength} onBreakClick={onBreakClick} />
      <SessionLabel
        sessionLength={sessionLength}
        onSessionClick={onSessionClick}
      />
      <Timer minutesLeft={minutesLeft} secondsLeft={secondsLeft} />
      <TimerControl onResetClick={onResetClick} onStartClick={onStartClick} />
    </div>
  );
};

export default App;
