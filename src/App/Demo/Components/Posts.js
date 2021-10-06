import React, { useEffect, useState } from "react";
import "./Posts.css";
import { Post } from "./Post";
import PostDescription from "../Container/PostDescription";
import { AddPost } from "./AddPost";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../Services/FetchPosts";
import { updatePostReducer, addPost } from "../../Store/Actions/actions";
import * as Icon from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { Modal } from "./Modal/Modal";
import { showHideModal } from "../../Store/Reducers/modalSlice";

export function Posts({ onLoadPostDescription, onDeletePost }) {
  const { posts, isLoading } = useSelector(state => state.postReducer);

  const [buttonText, setButtonText] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts().then(res => {
      dispatch(updatePostReducer(res));
    });
  }, []);

  if (posts && posts.length > 0) {
    return (
      <>
        <div className="sticky-top float-right">
          <Button
            className="btn btn-info"
            onClick={() => dispatch(showHideModal(true))}
            onMouseEnter={() => setButtonText(true)}
            onMouseLeave={() => setButtonText(false)}
          >
            {buttonText && (
              <span className="createPostButton" disabled>
                Create Post
              </span>
            )}
            <Icon.Plus
              disabled
              color="white"
              size="2rem"
              data-test="deleteButton"
            />
          </Button>
        </div>
        <div className="mt50">
          <AddPost />
          {/* <PostDescription show={show} /> */}
          <ul className="container main leftAlign posts">
            {posts.map(post => {
              return (
                <Post
                  data={post}
                  key={post.id}
                  clickHandler={onLoadPostDescription}
                  deleteHandler={onDeletePost}
                />
              );
            })}
          </ul>
        </div>
      </>
    );
  } else {
    return <h1>No Posts Found.</h1>;
  }
}

//
// const dispatch = useDispatch();
// import { showHideModal } from "./Store/Reducers/modalSlice";
// import { useDispatch, useSelector } from "react-redux";
