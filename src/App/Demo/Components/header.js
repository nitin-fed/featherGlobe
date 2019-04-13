import React, { Component } from "react";
import Counter from "./counter";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        Application Header
        <Counter counter={this.props.ctr} />
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    ctr: state.counter
  };
};

export default connect(mapPropsToState)(Header);
