import * as actions from "../../Store/Actions/actionType";

const initialState = {
  articles: {},
  articlesFetchError: false,
  articlesFetchErrorData: {}
};

export const articleReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };

    case actions.FETCH_ARTICLES_FAIL:
      return {
        ...state,
        articlesFetchError: true,
        articlesFetchErrorData: action.payload
      };

    case actions.DELETE_ARTICLE:
      return {
        ...state
        //articles: updatedArticles
      };

    // case actionType.DELETE_ROW :
    // const updateGuessWord = state.guessedWords.filter(
    //   (item) => item.id !== action.payload.id
    // );
    // return {
    //   ...state,
    //   guessedWords: updateGuessWord
    // }

    case actions.EDIT_ARTICLE_DESCRIPTION:
      // const articleToUpdate = state.articles.find(action.payload['key'])
      // console.log(articleToUpdate)

      return {
        ...state,
        articles: {
          ...state.articles,
          [action.payload.keyname]: {
            ...state.articles[action.payload.keyname],
            description: action.payload.evt.target.value
          }
        }
      };

    case actions.SAVE_EDIT_BUTTON:
      return {
        ...state,
        articles: {
          ...state.articles,
          [action.payload]: {
            ...state.articles[action.payload],
            editable: state.articles[action.payload].editable ? false : true
          }
        }
      };

    default: {
      return {
        ...state
      };
    }
  }
};
