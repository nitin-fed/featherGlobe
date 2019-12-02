import React, { useEffect } from 'react';
import './Posts.css';
import { Post } from './Post';
import PostDescription from '../Container/PostDescription';
import { AddPost } from './AddPost';

export function Posts({
  onFetchPosts,
  posts,
  onLoadPostDescription,
  show,
  onDeletePost,
  onAddPost
}) {
  useEffect(() => {
    onFetchPosts();
  }, []);

  if (posts) {
    return (
      <div>
        <button onClick={() => onAddPost()}>Add Post</button>
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
