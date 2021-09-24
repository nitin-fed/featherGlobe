import React, { Component } from "react";
import { connect } from "react-redux";
import { initArticles, addArticle, deleteArticle } from "./ArticleServices";
import { editArticleDescription, saveEditButtonClick } from "./ArticleAction";
import * as Icon from "react-bootstrap-icons";

import ContentEditable from "react-contenteditable";

import "./style.css";
import Backdrop from "../../Components/Backdrop";
import { AddArticle } from "./AddArticle";
import {Button} from "react-bootstrap";

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      showModal: false
    };
  }

  componentDidMount() {
    this.props.fetchArticlesOnLoad();
  }

  handleAddArticle = () => {
    this.setState({
      ...this.state,
      showModal: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      ...this.state,
      showModal: false
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        {this.state.showModal && (
          <AddArticle
            addArticleHandler={this.props.onAddArticle}
            handleCloseModal={this.handleCloseModal}
          />
        )}

        <Backdrop
          show={this.state.showModal}
          clicked={this.hamburgerHandler}
        ></Backdrop>

        <Button color="primary" onClick={() => this.handleAddArticle()}>
          Add Article
        </Button>
        <br />
        <br />

        {Object.keys(this.props.articles).map((keyname, index) => {
          return (
            <div className="articleContainer">
              <div className="articleHeader">
                <h4>{this.props.articles[keyname].title}</h4>
                <div className="buttonContainer">
                  <Icon.TrashFill
                    onClick={() => this.props.onDeleteArticle(keyname)}
                  />
                  <span
                    id={keyname}
                    onClick={() =>
                      this.props.onSaveEditButtonClick(
                        keyname,
                        this.props.articles[keyname].description,
                        this.props.articles[keyname].editable
                      )
                    }
                  >
                    {this.props.articles[keyname].editable ? (
                      <Icon.SaveFill color="primary" />
                    ) : (
                      <Icon.PencilFill color="warning" />
                    )}
                  </span>
                </div>
              </div>

              <div className="articleBody">
                <ContentEditable
                  id="descriptionEdit"
                  html={this.props.articles[keyname].description} // innerHTML of the editable div
                  disabled={!this.props.articles[keyname].editable} // use true to disable edition
                  onChange={evt =>
                    this.props.onEditArticleDescription(evt, keyname)
                  } // handle innerHTML change
                />
              </div>

              <div className="articleFooter">
                {this.props.articles[keyname].date}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articleReducers.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticlesOnLoad: () => dispatch(initArticles),
    onEditArticleDescription: (evt, key) =>
      dispatch(() => dispatch(editArticleDescription({ evt: evt, key: key }))),
    onAddArticle: articleData =>
      dispatch(dispatch =>
        addArticle(dispatch, { data: articleData, type: "add" })
      ),
    onSaveEditButtonClick: (key, editedDesc, toSave) =>
      dispatch(
        saveEditButtonClick(dispatch, {
          key: key,
          editedDesc: editedDesc,
          toSave: toSave
        })
      ),
    onDeleteArticle: key =>
      dispatch(dispatch => deleteArticle(dispatch, { key: key }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
