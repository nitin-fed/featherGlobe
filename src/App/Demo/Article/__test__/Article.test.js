import React from "react";
import { mount } from "enzyme";

import Article from "../Article";
import { store } from "../../../Store/createStore";
import { Provider } from "react-redux";
import * as reactRedux from "react-redux";

const articles = {
  articles: [
    {
      editable: true,
      title: "title",
      description: "description",
      date: "some date"
    },
    {
      title: "title",
      description: "description",
      date: "some date"
    }
  ]
};

describe("Article", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  useSelectorMock.mockReturnValue(articles);

  const dummyDispatch = jest.fn();
  useDispatchMock.mockReturnValue(dummyDispatch);

  const props = {
    handleAddArticle: jest.fn(),
    deleteHandler: jest.fn(),
    showModal: false,
    show: false
  };

  let wrapper;

  wrapper = mount(
    <Provider store={store}>
      <Article {...props} />
    </Provider>
  );

  it("Add Article handler", () => {
    // expect(useSelectorMock).toHaveBeenCalled();
    const button = wrapper.find({ "test-id": "addArticle" }).first();
    button.simulate("click");
    expect(wrapper.find("AddArticle").exists()).toBe(true);
    expect(wrapper.find({ "test-id": "closeModal" }).exists()).toBe(true);
  });

  it("Close Modal handler", () => {
    const closeButton = wrapper.find({ "test-id": "closeModal" }).first();
    closeButton.simulate("click");
    expect(wrapper.find("AddArticle").exists()).toBe(false);
  });

  it("Delete", () => {
    const deleteButton = wrapper.find({ "data-test": "deleteButton" }).first();
    deleteButton.simulate("click");
  });

  it("Edit Description", () => {
    const fakeEvent = {
      event: { target: { value: "test description" } }
    };
    const editableTextArea = wrapper.find("ContentEditable").first();
    editableTextArea.simulate("change", fakeEvent);
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it("Save and Edit button if Editing", () => {
    const saveEditButton = wrapper
      .find({ "test-id": "saveEditButton" })
      .first();
    saveEditButton.simulate("click");
  });

  it("Save and Edit button if Saving", () => {
    const saveEditButton = wrapper.find({ "test-id": "saveEditButton" }).at(1);
    saveEditButton.simulate("click");
  });
});
