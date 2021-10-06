import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";

describe("App", () => {
  it("Render", () => {
    const wrapper = mount(<App />);
    console.log(wrapper.debug());

    expect(wrapper.find(App).exists()).toBeTruthy();
    // expect(wrapper.find(Logo).exists()).toBeTruthy();
    // expect(wrapper.find(Navigation).exists()).toBeTruthy();
  });
});
