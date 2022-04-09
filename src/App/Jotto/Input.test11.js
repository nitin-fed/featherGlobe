/**
 * IF React.useState is destructure in component
 */

import React from "react";
import { Input } from "./Input";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../Utils/testsUtils";

const setup = (props = { successWord: "party" }) => {
  return shallow(<Input {...props} />);
};
/**
 * Mocking actual react module and overwrite the useState method
 */
const mockSetCurrentGuess = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: initialState => [initialState, mockSetCurrentGuess]
}));

describe("Input", () => {
  it("Render", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-input");
    expect(component.exists()).toBe(true);
  });
});

describe("Test PropTypes", () => {
  const props = { successWord: "train" };
  checkProps(Input, props);
});

describe("State Controll Field", () => {
  it("Upate State with Input", () => {
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate("change", { target: { value: "train" } });
    expect(mockSetCurrentGuess).toHaveBeenCalled();
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
