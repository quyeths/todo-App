import React from "react";

const ListHeader = (props) => {
  const signOut = () => {
    console.log("sign out");
  };
  return (
    <div className="list-header">
      <h1>{props.listName}</h1>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
