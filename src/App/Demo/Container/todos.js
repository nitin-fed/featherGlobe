import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from '../Components/todoItem';

class Todos extends Component {
  state = {
    task: '',
    id: '',
    status: ''
  };

  onChangeHandler(event) {
    this.setState({ task: event.target.value, status: 'active' });
  }

  handleKeyPress = event => {
    if (this.state.task !== '') {
      if (event.charCode === 13 || event.target.textContent === 'Add') {
        this.props.onAddTaskHandler(this.state);
        this.setState({ task: '', status: '', id: '' });
      }
    } else {
      console.log('Show Erorrr');
    }
  };
  render() {
    return (
      <div className="container">
        <h1>Todo List {this.state.task}</h1>
        <input
          onKeyPress={this.handleKeyPress}
          type="text"
          value={this.state.task}
          onChange={e => this.onChangeHandler(e)}
        />{' '}
        &nbsp;
        <button onClick={e => this.handleKeyPress(e)}>Add</button>
        <hr />
        {this.props.todos.map(todo => (
          <Item
            checkboxClickHandler={this.props.onStatusChangeHandler}
            status={todo.status}
            key={todo.id}
            title={todo.task}
            clickHandler={() => this.props.onDeleteHandler(todo.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    title: state.todoReducer.task,
    status: state.todoReducer.status,
    id: state.todoReducer.id,
    todos: state.todoReducer.todos
  };
};

const mapDispatchToProp = dispatch => {
  return {
    onAddTaskHandler: data =>
      dispatch({
        type: 'ADD',
        payload: { task: data.task, id: new Date(), status: data.status }
      }),

    onDeleteHandler: index =>
      dispatch({
        type: 'DELETE',
        id: index
      }),

    onStatusChangeHandler: index =>
      dispatch({
        type: 'UPDATE_STATUS',
        id: index
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Todos);
