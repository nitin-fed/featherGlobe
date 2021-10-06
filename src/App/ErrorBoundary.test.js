import React from "react";
import { mount, shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

describe("Error Boundry", () => {
  const props = {
    children: <h1>test</h1>
  };

  it("Render", () => {
    const state = {
      hasError: true
    };
    const wrapper = mount(<ErrorBoundary {...state} {...props} />);
    expect(wrapper.find(ErrorBoundary).exists()).toBeTruthy();
  });

  it("Render", () => {});
});