import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "./Modal/Modal";
import { ModalHeader } from "./Modal/ModalHeader";
import { ModalFooter } from "./Modal/ModalFooter";
import { ModalBody } from "./Modal/ModalBody";
import { showHideModal } from "../../Store/Reducers/modalSlice";

export function AddPost({ submitHandler, posts, postId }) {
  const { show } = useSelector(state => state.modalReducer);
  const { isEditing, isVisible } = useSelector(state => state.postReducer);
  const dispatch = useDispatch();
  const cancelHandler = () => {
    dispatch(showHideModal(false));
  };
  let formElements = null;
  if (isEditing) {
    formElements = (
      <div>
        <label>ID:</label>
        <input type="text" disabled value={posts[postId].id} />
        <br />
        <label>Title:</label>{" "}
        <input
          type="text"
          placeholder="Enter Title"
          value={posts[postId].title}
        />{" "}
        <br />
        <label>Description:</label>
        <textarea
          rows="5"
          placeholder="Description"
          value={posts[postId].body}
        />
      </div>
    );
  } else {
    formElements = (
      <div>
        <label>ID:</label>
        <input type="text" disabled className="form-control" />
        <br />
        <label>Title:</label>{" "}
        <input className="form-control" type="text" placeholder="Enter Title" />{" "}
        <br />
        <label>Description:</label>
        <textarea rows="5" className="form-control" placeholder="Description" />
      </div>
    );
  }

  const modalHeader = <h3>{isEditing ? "Edit" : "Add"} New Post</h3>;

  return (
    <>
      <Modal show={show}>
        <ModalHeader data={modalHeader} />
        <ModalBody data={formElements} />
        <ModalFooter>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => cancelHandler()}
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary ml-3"
            onClick={submitHandler}
          >
            Submit
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

//  //{" "}
//  <div className="addPostForm">
//  //{" "}
//  <div >
//    //{" "}
//    <div className="postTitle">
//      // {isEditing ? "Edit" : "Add"} New Post //{" "}
//    </div>
//    //{" "}
//    <form>
//      // {formElements}
//      // <br />
//      // <button onClick={cancelHandler}>Cancel</button>
//      // <button onClick={submitHandler}>Submit</button>
//      //{" "}
//    </form>
//    //{" "}
//  </div>
//  //{" "}
// </div>
