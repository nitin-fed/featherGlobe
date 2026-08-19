import React, { Component } from 'react';
import Counter from './counter';
import { connect } from 'react-redux';

const Header = () => {
  const ctr = 1;
  return (
    <div className="App-header">
      Application Header
      <Counter counter={ctr} />
    </div>
  );
};

export default Header;
