import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div>
      <div className="outer-bar">
        <div className="inner-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
