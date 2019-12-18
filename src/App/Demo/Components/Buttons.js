import React from 'react';
import './components.css';

const Buttons = props => {
  return <button datalabel={props.datalabel} className={props.buttonclass} onClick={(evt) => props.clickHandler(evt)}>{props.caption}</button>;
};

export default Buttons;
