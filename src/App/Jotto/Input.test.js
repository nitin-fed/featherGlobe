import React from "react";
import { Input } from "./Input";
import { mount } from "enzyme";
import { findByTestAttr, checkProps, storeFactory } from "../Utils/testsUtils";
import { Provider } from "react-redux";

const setup = (initialState = {}, secretWord = "party") => {
  const store = storeFactory(initialState);

  return mount(
    <Provider store={store}>
      <Input secretWord={secretWord} />
    </Provider>
  );
};

describe("Render Input", () => {
  describe("If Success === true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ secretWordReducer: { success: true } });
    });
    //console.log(wrapper.debug());

    it("Render", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.exists()).toBe(true);
    });

    it("Input Should not render", () => {
      const component = findByTestAttr(wrapper, "input-box");
      expect(component.exists()).toBe(false);
    });

    it("Submit Button Should not render", () => {
      const component = findByTestAttr(wrapper, "submit-button");
      expect(component.exists()).toBe(false);
    });
  });

  describe("If success === false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });

    it("Render", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.exists()).toBe(true);
    });

    it("Input Should render", () => {
      const component = findByTestAttr(wrapper, "input-box");
      expect(component.exists()).toBe(true);
    });

    it("Submit Button Should render", () => {
      const component = findByTestAttr(wrapper, "submit-button");
      expect(component.exists()).toBe(true);
    });
  });
});

describe("Input", () => {
  it("Render", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, "component-input");
    expect(component.exists()).toBe(true);
  });
});

describe("Test PropTypes", () => {
  const props = { successWord: "train" };
  checkProps(Input, props);
});

describe("State Controll Field", () => {
  let wrapper;
  let mockSetCurrentGuess = jest.fn();
  let originalUseState;

  beforeEach(() => {
    originalUseState = React.useState;
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({ success: false });
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  it("Upate State with Input", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate("change", { target: { value: "train" } });
    expect(mockSetCurrentGuess).toHaveBeenCalled();
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  it("Clear Input field ", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalled();
  });
});
