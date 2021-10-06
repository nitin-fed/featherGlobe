import * as actionType from "../../../Store/Actions/actionType";

import * as actions from "../ArticleAction";

describe("Article Action", () => {
  xit("fetchArticles", () => {
    const expectedAction = {
      type: actionType.FETCH_ARTICLES
    };
    expect(actions.fetchArticles()).toEqual(expectedAction);
  });

  xit("fetchArticlesFail", () => {
    const expectedAction = {
      type: actionType.FETCH_ARTICLES_FAIL
    };
    expect(actions.fetchArticlesFail()).toEqual(expectedAction);
  });

  xit("editArticleDescription", () => {
    const expectedAction = {
      type: actionType.EDIT_ARTICLE_DESCRIPTION
    };
    expect(actions.editArticleDescription()).toEqual(expectedAction);
  });

  xit("saveEditButtonClick", () => {
    const expectedAction = {
      type: actionType.SAVE_EDIT_BUTTON
    };
    expect(actions.saveEditButtonClick()).toEqual(expectedAction);
  });

  it("deleteArticle", () => {
    const expectedAction = {
      type: actionType.DELETE_ARTICLE
    };
    expect(actions.deleteArticle()).toEqual(expectedAction);
  });
});
