/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../../Store/Actions/actionType";

class Profile extends Component {
  state = {
    name: "",
    age: "",
  };

  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  ageChangeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  render() {
    return (
      <div className='bodyContents'>
        <pre>Local state to store</pre>
        Name:{" "}
        <input
          type='text'
          value={this.name}
          onChange={this.nameChangeHandler}
        />
        Age:{" "}
        <input
          type='number'
          value={this.age}
          onChange={this.ageChangeHandler}
        />
        <button
          onClick={(name, age) => this.props.onAddPersonHandler(name, age)}>
          Add Person
        </button>
        <ul>
          {this.props.persons.map((person, i) => (
            <li key={i}>{person}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   
  return {
    name: state.profileReducer.person.name,
    age: state.profileReducer.person.age,
    persons: state.profileReducer.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPersonHandler: (name, age) =>
      dispatch({
        type: actionType.ADD_PERSON,
        value: { name: name, age: age },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
