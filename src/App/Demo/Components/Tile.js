import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export function Tile(props) {
  const classNames = [
    'alert-primary',
    'alert-secondary',
    'alert-success',
    'alert-danger',
    'alert-warning',
    'alert-info',
    'alert-dark'
  ];

  const randomClass = classNames[Math.floor(Math.random() * classNames.length)];
  const classes = `col-md-4 alert ${randomClass}`;

  return (
    <div className={classes} role="alert" style={{ textAlign: 'left' }}>
      <Button
        color="primary"
        className={classes.button}
        style={{ float: 'right' }}
        onClick={() => props.clickHandler(props.data.id)}
      >
        Details
      </Button>
      {props.data.name}
    </div>
  );
}
