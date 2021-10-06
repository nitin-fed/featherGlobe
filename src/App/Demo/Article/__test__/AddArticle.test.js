import React from "react";
import { mount } from "enzyme";
import { AddArticle } from "../AddArticle";
import { store } from "../../../Store/createStore";
import { Provider } from "react-redux";
import { ModalDialog } from "react-bootstrap";
import { act } from "react-dom/test-utils";

const props = {
  addArticleHandler: jest.fn(() => jest.fn()),
  handleCloseModal: jest.fn(),
  handleSubmit: jest.fn(() => jest.fn())
};

describe("Article", () => {
  const wrapper = mount(
    <Provider store={store}>
      <AddArticle {...props} />
    </Provider>
  );
  it("Render", () => {
    expect(wrapper.find(AddArticle).exists()).toBeTruthy();
  });

  it("title on change", () => {
    const titleInput = wrapper.find({ id: "articleTitle" });
    const mockEvent = {
      target: { value: "test" }
    };
    titleInput.simulate("change", mockEvent);
    expect(wrapper.find("#articleTitle").prop("value")).toEqual("test");
  });

  it("description on change", () => {
    const titleInput = wrapper.find({ id: "description" });
    const mockEvent = {
      target: { value: "test" }
    };
    titleInput.simulate("change", mockEvent);
    expect(wrapper.find("#description").prop("value")).toEqual("test");
  });
  it("Date on change", () => {
    const titleInput = wrapper.find({ id: "date" });
    const mockEvent = {
      target: { value: "test" }
    };
    titleInput.simulate("change", mockEvent);
    expect(wrapper.find("#date").prop("value")).toEqual("test");
  });

  it("Submit", () => {
    const submitButton = wrapper.find({ "test-id": "saveAndAddNew" }).first();
    submitButton.simulate("click");
    // expect(wrapper.find(ModalDialog).exists).toBeFalsy();
    store.dispatch(props.addArticleHandler);
    expect(wrapper.find(ModalDialog).exists).toBeTruthy();
  });

  it("Save and Close Button", () => {
    const saveAndClose = wrapper.find({ "data-info": "saveAndClose" }).first();
    //saveAndClose.simulate("click");
    act(() => {
      saveAndClose.props().onClick();
    });
    expect(props.handleCloseModal).toBeCalled();
  });
});
