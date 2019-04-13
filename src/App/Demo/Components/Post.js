import React from "react";

export function Post(props) {
 
  return (
    <li>
      <div className="row">
        <div className="col-md-1">{props.data.id}</div>
        <div className="col-md-10">{props.data.title}</div>
        <div className="col-md-1">
          <button onClick={() => props.clickHandler(props.data.id)}>
            >>
          </button>
          
        </div>
      </div>
    </li>
  );
}
