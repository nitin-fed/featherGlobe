import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initArticles,
  addArticle,
  deleteArticle,
  sendEditArticleDescription
} from "./ArticleServices";
import { editArticleDescription, saveEditButtonClick } from "./ArticleAction";
import * as Icon from "react-bootstrap-icons";

import ContentEditable from "react-contenteditable";

import "./style.css";
import Backdrop from "../../Components/Backdrop";
import { AddArticle } from "./AddArticle";
import { Button } from "react-bootstrap";

const Article = () => {
  const [showModal, setShowModel] = useState(false);

  const { articles } = useSelector(state => state.articleReducers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initArticles());
  }, []);

  const handleAddArticle = () => {
    setShowModel(true);
  };

  const handleCloseModal = () => {
    setShowModel(false);
  };

  const deleteHandler = keyname => {
    console.log("Show Spinner ________________");
    console.log(keyname);
    dispatch(deleteArticle(keyname));
  };

  return (
    <div className="container">
      {showModal && (
        <AddArticle
          addArticleHandler={addArticle}
          handleCloseModal={handleCloseModal}
        />
      )}

      <Backdrop show={showModal}></Backdrop>

      <Button
        test-id="addArticle"
        color="primary"
        onClick={() => handleAddArticle()}
      >
        Add Article
      </Button>
      <br />
      <br />

      {Object.keys(articles).map((keyname, index) => {
        return (
          <div key={index} className="articleContainer">
            <div className="articleHeader">
              <h4>{articles[keyname].title}</h4>
              <div className="buttonContainer">
                <Icon.TrashFill
                  data-test="deleteButton"
                  onClick={() => deleteHandler(keyname)}
                />
                <span
                  test-id="saveEditButton"
                  id={keyname}
                  onClick={() =>
                    articles[keyname].editable
                      ? dispatch(
                          sendEditArticleDescription({
                            keyname,
                            desc: articles[keyname].description,
                            editable: articles[keyname].editable
                          })
                        )
                      : dispatch(
                          saveEditButtonClick(
                            keyname,
                            articles[keyname].description,
                            articles[keyname].editable
                          )
                        )
                  }
                >
                  {articles[keyname].editable ? (
                    <Icon.SaveFill color="primary" className="ml-3" />
                  ) : (
                    <Icon.PencilFill color="warning" className="ml-3" />
                  )}
                </span>
              </div>
            </div>

            <div className="articleBody">
              <ContentEditable
                id="descriptionEdit"
                html={articles[keyname].description} // innerHTML of the editable div
                disabled={!articles[keyname].editable} // use true to disable edition
                onChange={evt =>
                  dispatch(
                    editArticleDescription({ evt: evt, keyname: keyname })
                  )
                } // handle innerHTML change
              />
            </div>

            <div className="articleFooter">{articles[keyname].date}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Article;
