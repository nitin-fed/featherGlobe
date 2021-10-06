import React from "react";
import App from "./demoApp";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

describe("Logo", () => {
  const props = {
    match: { path: "test" }
  };
  it("Should render logo", () => {
    const wrapper = mount(
      <BrowserRouter>
        <App {...props} />
      </BrowserRouter>
    );
    expect(wrapper.find(App).exists()).toBeTruthy();
  });
});
