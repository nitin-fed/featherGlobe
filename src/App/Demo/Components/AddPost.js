import React from 'react'

export function AddPost({ isVisible, cancelHandler, submitHandler, isEditing, posts, postId }) {


  let formElements = null;
  if (isEditing) {
    formElements = <div>
      <label>ID:</label>
      <input type="text" disabled value={posts[postId].id} />
      <br />
      <label>Title:</label>{" "}
      <input type="text" placeholder="Enter Title" value={posts[postId].title} /> <br />
      <label>Description:</label>
      <textarea rows="5" placeholder="Description" value={posts[postId].body} />
    </div>
  } else {
    formElements = <div>
      <label>ID:</label>
      <input type="text" disabled  />
      <br />
      <label>Title:</label>{" "}
      <input type="text" placeholder="Enter Title" /> <br />
      <label>Description:</label>
      <textarea rows="5" placeholder="Description" />
    </div>
  }
  if (isVisible) {
    return (
      <div className="addPostForm">
        <div>
          <div className="postTitle">{isEditing ? 'Edit' : 'Add'} New Post</div>
          <form>
            {formElements}
            <br />
            <button onClick={cancelHandler}>Cancel</button>
            <button onClick={submitHandler}>Submit</button>
          </form>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
