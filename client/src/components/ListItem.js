import React from "react";
import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";

const ListItem = (props) => {
  return (
    <div className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{props.task.title}</p>
        <ProgressBar />
      </div>

      <div className="button-container">
        <button className="edit">EDIT</button>
        <button className="delete">DELETE</button>
      </div>
    </div>
  );
};

export default ListItem;
