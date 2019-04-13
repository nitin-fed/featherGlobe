import React, { Component } from "react";
import Counter from "../Components/counter";
import Buttons from "../Components/button";
import "./counters.css";

import * as actionType from "../store/actionType";

import { connect } from "react-redux";
import Post from "../Components/listItem";

class Counters extends Component {
  render() {
    return (
      <div className="container">
        <h1>Counters </h1>
        <Counter counter={this.props.ctr} />
        <br />
        <Buttons
          clickHandler={() => this.props.onClickHandler("add")}
          caption={actionType.ADD}
        />
        &nbsp;
        <Buttons
          clickHandler={() => this.props.onClickHandler("subtract")}
          caption={actionType.SUBTRACT}
        />
        &nbsp;
        <Buttons
          clickHandler={() => this.props.onClickHandler("add10", 10)}
          caption="ADD 10"
        />
        &nbsp;
        <Buttons
          clickHandler={() => this.props.onClickHandler("subtract10", 10)}
          caption="SUBTRACT 10"
        />
        <hr />
        <Buttons
          clickHandler={this.props.onStoreCounter}
          caption="Store Counter"
        /> <small>Result will append after 2 seconds</small>
        <hr />
        <ul>
          {this.props.storeResult.map(strResult => (
            <Post
              key={strResult.id}
              title={strResult.value}
              clickHandler={() => this.props.onDeleteResult(strResult.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    ctr: state.counterReducer.counter,
    storeResult: state.counterReducer.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickHandler: (action, value) => dispatch(actionType.actionCreator(action, value)),
    onStoreCounter: () => dispatch(actionType.storeResult()),
    onDeleteResult: (value) => dispatch({ type: actionType.DELETE_RESULT, value: value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counters);