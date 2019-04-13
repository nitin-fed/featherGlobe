import React from "react";
import "./todo.css";

const listItem = props => {

  let check = <input type="checkbox" onClick={props.checkboxClickHandler}  />;
  if (props.status === "completed") {
    check = <input onClick={props.checkboxClickHandler} type="checkbox" checked />;
  }

  return (
    <li>
      <label className="switch">
        {check}
        <span className="slider round" />
      </label>
      &nbsp;
      <div>{props.title}</div>
      <button onClick={props.clickHandler}>Delete</button>
    </li>
  );
};

export default listItem;
