import React from "react";

const BreakLabel = ({ breakLength, onBreakClick }) => {
  return (
    <div id="break-label">
      <span>
        <button
          id="break-increment"
          className="btn btn-primary mr-2"
          onClick={breakLength < 60 ? () => onBreakClick("inc") : undefined}
        >
          <i className="fas fa-arrow-up" />
        </button>
        <span id="break-length">
          <strong>{breakLength}</strong>
        </span>
        <button
          id="break-decrement"
          className="btn btn-primary ml-2"
          onClick={breakLength > 1 ? () => onBreakClick("dec") : undefined}
        >
          <i className="fas fa-arrow-down" />
        </button>
      </span>
    </div>
  );
};

export default BreakLabel;
