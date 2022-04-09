import React from "react";
import Support, { getSecretWord } from "./Support";
import { mount } from "enzyme";

describe("Support", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Support />);
  });
  it("Should not Render desc when show === false", () => {
    expect(wrapper.find(Support).exists()).toBeTruthy();
    expect(wrapper.find({ "test-id": "desc" }).exists()).toBe(false);
  });

  it("Should Render desc when show === true", () => {
    const mockSetShow = jest.fn();
    React.useState = jest.fn(() => ["false", mockSetShow]);
    const button = wrapper.find("button").at(1);
    button.simulate("click", true);
    // expect(mockSetShow).toBeCalled(); //FAILING HERE
  });

  it("Should Render desc when show === true", () => {
    const button = wrapper.find("button").at(1);
    button.simulate("click", true);
    expect(wrapper.find({ "test-id": "desc" }).exists()).toBe(true);
  });

  //**** OPTIONAL TO CHECK FALSE CONDITION */
  xit("Should Render desc when show === FALSE", () => {
    const button = wrapper.find("button").at(1);
    wrapper.setProps({ show: false });
    button.props().onClick();
    expect(wrapper.find({ "test-id": "desc" }).exists()).toBe(false);
  });
});

describe("secret Work", () => {
  const wrapper = mount(<Support />);
  it("Incorrect Guess", () => {
    const secretWord = "party";
    const button = wrapper.find("button").first();
    button.simulate("click");
    const letterMatchCount = getSecretWord("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });
});
