import React from 'react';
import './components.css';

const Buttons = props => {
  return <button onClick={props.clickHandler}>{props.caption}</button>;
};

export default Buttons;
