import React, { useEffect } from "react";
import "./Posts.css";
import { Post } from "./Post";
import PostDescription from "../Container/PostDescription";
import { AddPost } from "./AddPost";

export function Posts({
  posts,
  onLoadPostDescription,
  show,
  onDeletePost,
  onAddPost,
  onFetchPosts
}) {
  useEffect(() => {
    onFetchPosts();
  }, [onFetchPosts]);
  if (posts && posts.length > 0) {
    return (
      <div>
        <button onClick={() => onAddPost()}>Add Post___</button>
        <AddPost />
        <PostDescription show={show} />
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
    );
  } else {
    return <h1>No Posts Found.</h1>;
  }
}
