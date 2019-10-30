import React, { useEffect } from 'react';
import "./Posts.css";
import { Post } from './Post';
import PostDescription from '../Container/PostDescription'
import { AddPost } from './AddPost';

export function Posts({ onFetchPosts, posts, onLoadPostDescription, show, onDeletePost, onAddPost }) {

  useEffect(() => {
    onFetchPosts()
  }, [])

  if (posts) {
    return (
      <div>
        <button onClick={() => onAddPost()}>Add Post</button>
        <AddPost />
        <PostDescription show={show} />
        <ul className='container main leftAlign posts'>
          {posts.map((post) => {
            return (
              <Post data={post} key={post.id} clickHandler={onLoadPostDescription} deleteHandler={onDeletePost} />
            )
          })}
        </ul>
      </div>
    )
  } else {
    return <h1>No Posts Found.</h1>
  }
}


/*


export function Posts({
  posts,
  onFetchPosts,
  onLoadPostDescription,
  postBody,
  isAddPostVisible,
  onAddPost,
  onCancelPost,
  onSubmit,
  postId,
  onEditPost
}) {

  //const [data, setData] = useState([]);

  useEffect( () => {
    onFetchPosts();
  }, []);


  return (

    <div>
      <div className="container">
        { <div className="row">
          <div className="col-sm">
            <button onClick={onFetchPosts}>Load Posts</button>
          </div>
        </div> }
        <div className="row">
          <div className="col-sm">Total Posts - {posts.length} </div>
          <div className="col-sm">
            <span>Post Id</span>
            <span className='alignRight'>{postId}</span>
          </div>
        </div>

        <div className="row">
          <div className="col-sm scrollableContainer">
            <ul className="posts">
              {posts.map((post, index) => {
                return (
                  <Post
                    key={post.id}
                    data={post}
                    clickHandler={() => onLoadPostDescription(post.id)}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col-sm">
            <p> {postBody} </p>
            <button onClick={ () => onEditPost()}>Edit Post</button>
            <button onClick={onAddPost}>Add Post</button>
            <br /> <br />
            <AddPost
              isVisible={isAddPostVisible}
              cancelHandler={onCancelPost}
              submitHandler={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


*/