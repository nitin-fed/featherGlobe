import React from "react";
import { shallow } from "enzyme";
import { Congrats } from "./Congrats";
import { findByTestAttr, checkProps } from "../Utils/testsUtils";

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

describe("Congrates Compoonent", () => {
  it("Should Render", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, "component-congrats");
    const componentMessage = findByTestAttr(wrapper, "congrats-message");
    expect(component.length).toBe(1);
    expect(componentMessage.exists()).toBe(false);
  });

  it("if success == false", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.exists()).toBe(true);
    expect(component.length).toBe(1);
  });

  it("if success == true", () => {
    const wrapper = setup({ success: true });
    const component = findByTestAttr(wrapper, "congrats-message");
    expect(component.exists()).toBe(true);
    expect(component.length).toBe(1);
  });

  it("checkPropTypes", () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
  });
});
