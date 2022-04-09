import React from "react";
import * as Icon from "react-bootstrap-icons";
export function Post(props) {
  return (
    <li>
      <div className="d-flex bd-highlight mb-1">
        <div
          className="p-2 bd-highlight"
          onClick={() => props.clickHandler(props.data.id)}
        >
          <h4>{props.data.title}</h4>
        </div>
        <div className="ml-auto p-2 bd-highlight">
          <Icon.Trash2Fill
            color="red"
            size="1.2rem"
            data-test="deleteButton"
            onClick={() => props.deleteHandler(props.data.id)}
          />
        </div>
      </div>

      <div className="d-flex bd-highlight mb-1">
        <div className="p-2 bd-highlight"> {props.data.body}</div>
        <div className="ml-auto p-2 bd-highlight">&nbsp;</div>
      </div>
    </li>
  );
}
