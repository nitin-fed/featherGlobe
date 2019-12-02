import React from 'react';

const listItem = props => {
  return (
    <li>
      <div>{props.title}</div>
      <button onClick={props.clickHandler}>Delete11111</button>
    </li>
  );
};

export default listItem;
