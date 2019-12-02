import React from 'react';

export function Post(props) {
  return (
    <li>
      <div className="row">
        <div className="col-md-1">{props.data.id}</div>
        <div
          className="col-md-10"
          onClick={() => props.clickHandler(props.data.id)}
        >
          {props.data.title}
        </div>

        <button onClick={() => props.deleteHandler(props.data.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
