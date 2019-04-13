import React, { Component } from "react";
import { connect } from 'react-redux'


class DemoHome extends Component {
  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <h3>Welcome user {this.props.username}</h3>
      </div>
      
    );
  }
}

const mapPropsToState = (state) => {
    return {
        username: state.username
    }
}

export default connect(mapPropsToState)(DemoHome);
