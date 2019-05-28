import React from "react";

const TimerControl = ({ onResetClick, onStartClick }) => {
  return (
    <div>
      <button
        id="start_stop"
        className="btn btn-primary mr-2"
        onClick={onStartClick}
      >
        Start/Stop
      </button>
      <button
        id="reset"
        className="btn btn-primary ml-2"
        onClick={onResetClick}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControl;
