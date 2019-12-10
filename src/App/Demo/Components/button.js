import React from 'react';
import './components.css';

const Buttons = props => {
  return <button className={props.buttonclass} onClick={props.clickHandler}>{props.caption}</button>;
};

export default Buttons;
