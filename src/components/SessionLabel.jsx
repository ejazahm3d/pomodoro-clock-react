import React from "react";

const SessionLabel = ({ sessionLength, onSessionClick }) => {
  return (
    <div id="session-label" className="my-3">
      <span>
        <button
          id="session-increment"
          className="btn btn-primary mr-2"
          onClick={sessionLength < 60 ? () => onSessionClick("inc") : undefined}
        >
          <i className="fas fa-arrow-up" />
        </button>
        <span id="session-length">
          <strong>{sessionLength}</strong>
        </span>
        <button
          id="session-decrement"
          className="btn btn-primary ml-2"
          onClick={sessionLength > 1 ? () => onSessionClick("dec") : undefined}
        >
          <i className="fas fa-arrow-down" />
        </button>
      </span>
    </div>
  );
};

export default SessionLabel;
