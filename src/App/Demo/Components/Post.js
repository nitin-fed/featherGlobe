import React from "react";
import * as Icon from "react-bootstrap-icons";
export function Post(props) {
  return (
    <li>
      <div class="d-flex bd-highlight mb-1">
        <div
          class="p-2 bd-highlight"
          onClick={() => props.clickHandler(props.data.id)}
        >
          <h4>{props.data.title}</h4>
        </div>
        <div class="ml-auto p-2 bd-highlight">
          <Icon.Trash2Fill
            color="red"
            size="1.2rem"
            data-test="deleteButton"
            onClick={() => props.deleteHandler(props.data.id)}
          />
        </div>
      </div>

      <div class="d-flex bd-highlight mb-1">
        <div class="p-2 bd-highlight"> {props.data.body}</div>
        <div class="ml-auto p-2 bd-highlight">&nbsp;</div>
      </div>
    </li>
  );
}
