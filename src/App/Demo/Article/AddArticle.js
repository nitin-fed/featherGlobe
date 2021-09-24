import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export const AddArticle = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const articleData = {
    description: description,
    title: title,
    date: date
  };

  const handleSubmit = dataStr => {
    dispatch(props.addArticleHandler(articleData));
    setTitle("");
    setDate("");
    setDescription("");
    if (dataStr) props.handleCloseModal();
  };

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  return (
    <>
      <Modal.Dialog className="addArticleContainer">
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalBody">
          <label htmlFor="articleTitle">Title</label>
          <input
            id="articleTitle"
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />{" "}
          <br />
          <br />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
          <br />
          <br />
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            onChange={e => setDate(e.target.value)}
            value={date}
          />
          <br />
          <br />
        </Modal.Body>

        <Modal.Footer>
          <Button
            test-id="closeModal"
            onClick={() => props.handleCloseModal()}
            variant="secondary"
          >
            Close
          </Button>
          <Button
            test-id="saveAndAddNew"
            onClick={() => handleSubmit()}
            variant="primary"
            disabled={title === ""}
          >
            Save and Add New
          </Button>

          <Button
            disabled={title === ""}
            data-info="saveAndClose"
            onClick={() => handleSubmit("saveAndClose")}
            variant="info"
          >
            Save and Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
};
