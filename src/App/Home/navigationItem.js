import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = props => {
  return (
    <div>
      <NavLink to={props.address}>{props.title}</NavLink>
    </div>
  );
};
export default NavItem;
