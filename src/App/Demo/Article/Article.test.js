import React from "react";
import { mount } from "enzyme";

import Article from "./Article";
import { store } from "../../Store/createStore";
import { Provider } from "react-redux";
import * as reactRedux from "react-redux";

// const mockSetShowModel = jest.fn();
// React.useState = jest.fn(() => [false, mockSetShowModel]);

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

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn()
// }));

// useSelector.mockImplementation(() => articles);

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
    const button = wrapper.find({ "test-id": "addArticle" }).first();
    button.simulate("click");
    // expect(mockSetShowModel).toHaveBeenCalledWith(true);
    // expect(mockSetShowModel).toHaveBeenCalledTimes(1);
    //wrapper.setProps({ showModal: true });
    //wrapper.update();
    expect(wrapper.find("AddArticle").exists()).toBe(true);
    expect(wrapper.find({ "test-id": "closeModal" }).exists()).toBe(true);
  });

  it("Close Modal handler", () => {
    const closeButton = wrapper.find({ "test-id": "closeModal" }).first();
    closeButton.simulate("click");
    expect(wrapper.find("AddArticle").exists()).toBe(false);
  });

  it("Delete", () => {
    //console.log(wrapper.debug());
    //console.log(wrapper.find(".articleHeader").length);
    const deleteButton = wrapper.find({ "data-test": "deleteButton" }).first();
    deleteButton.simulate("click");
    //console.log(wrapper.find(".articleHeader").length);
  });

  it("Edit Description", () => {
    const fakeEvent = {
      event: { target: { value: "test description" } }
    };
    const editableTextArea = wrapper.find("ContentEditable").first();
    //console.log(editableTextArea.debug());
    editableTextArea.simulate("change", fakeEvent);
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it("Save and Edit button if Editing", () => {
    //console.log(wrapper.debug());
    const saveEditButton = wrapper
      .find({ "test-id": "saveEditButton" })
      .first();
    saveEditButton.simulate("click");
  });

  it("Save and Edit button if Saving", () => {
    //console.log(wrapper.debug());
    const saveEditButton = wrapper.find({ "test-id": "saveEditButton" }).at(1);
    saveEditButton.simulate("click");
  });
});
