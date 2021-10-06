import * as actionType from "../../Store/Actions/actionType";

export const updateArticles = data => {
  return {
    type: actionType.FETCH_ARTICLES,
    payload: data
  };
};

export const fetchArticlesFail = data => {
  return {
    type: actionType.FETCH_ARTICLES_FAIL,
    payload: data
  };
};

export const editArticleDescription = payload => {
  return {
    type: actionType.EDIT_ARTICLE_DESCRIPTION,
    payload: payload
  };
};

export const saveEditButtonClick = (keyname, desc, editable) => {
  return {
    type: actionType.SAVE_EDIT_BUTTON,
    payload: keyname
  };
};

export const deleteArticle = payload => {
  return {
    type: actionType.DELETE_ARTICLE,
    payload: payload
  };
};
