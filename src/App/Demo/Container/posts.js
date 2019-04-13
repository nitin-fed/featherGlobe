import React, { Component } from "react";
import axios from "axios";
import "./counters.css";
import Post from "../Components/listItem";
import Backdrop from "./backdrop";
import {AddPost} from "../Components/AddPost";
import { connect } from "react-redux";
import * as actionType from "../store/actionType";

class Posts extends Component {
  state = {
    Posts: [{ id: 1, title: "Testing from reducer" }]
  };

  componentDidMount = () => {
    axios
      .get("/Posts/post.json")
      .then(response => {
        const posts = [];
        for (let key in response.data) {
          posts.push({
            ...response.data[key],
            id: key
          });
        }
        this.setState({ Posts: posts });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  /*
  addPostHandler = () => {
    const _displayBlocker = this.state.displayBlocker;
    this.setState({ displayBlocker: !_displayBlocker });

    const postData = {
      id: 1,
      title: "Sample Post 1"
    };

    axios
      .post("/Posts/post.json", postData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
*/
  render() {
    const posts = this.props.Posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          clickHandler={() => this.props.onDeleteHandler(post.id)}
        />
      );
    });

    let addPost = null;
    if (this.props.displayBlocker) {
      addPost = (
        <div>
          <Backdrop />
          <AddPost cancelPost={this.props.onCancelAddPost} />
        </div>
      );
    }

    return (
      <div className="container">
        <h1>My Posts</h1>
        <button onClick={this.props.onAddPostHandler}>Add Post</button>
        <hr />
        <ul className="posts">{posts}</ul>
        {addPost}
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    Posts: state.postReducer.Posts,
    displayBlocker: state.postReducer.displayBlocker
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteHandler: (index) => dispatch({ type: actionType.DELETE_POST, value: index }),
    onCancelAddPost: () => dispatch({ type: actionType.CANCEL_ADDPOST }),
    onAddPostHandler: () => dispatch({ type: actionType.ADD_POST })
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Posts);
