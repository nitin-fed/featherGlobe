import axios from "axios";
import {
  updateArticles,
  fetchArticlesFail,
  saveEditButtonClick
} from "./ArticleAction";

import { displayLoader } from "../../Store/Actions/commonActions";

export const baseUrl =
  "https://myposts-fd0b5.firebaseio.com/Posts/Articles.json";

export const fetchArticles = () => {
  const url = baseUrl;
  return dispatch => {
    dispatch(displayLoader(true));
    axios
      .get(url)
      .then(response => {
        dispatch(updateArticles(response.data));
        dispatch(displayLoader(false));
      })
      .catch(error => {
        dispatch(fetchArticlesFail(error));
      });
  };
};

export const addArticle = payload => {
  const url = baseUrl;
  return dispatch => {
    axios({
      method: "post",
      url: url,
      data: payload
    })
      .then(response => {
        dispatch(updateArticles());
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteArticle = payload => {
  const url = baseUrl;
  return dispatch => {
    dispatch(displayLoader(true));
    axios
      .delete(
        "https://myposts-fd0b5.firebaseio.com/Posts/Articles/" +
          payload +
          ".json"
      )
      .then(response => {
        if (response.status === 200) {
          dispatch(displayLoader(false));
          dispatch(updateArticles());
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const sendEditArticleDescription = payload => {
  return dispatch => {
    axios
      .patch(
        "https://myposts-fd0b5.firebaseio.com/Posts/Articles/" +
          payload.keyname +
          ".json",
        {
          description: payload.desc
        }
      )
      .then(res => {
        console.log(res);
        dispatch(
          saveEditButtonClick(payload.keyname, payload.desc, payload.editable)
        );
        updateArticles(dispatch);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
