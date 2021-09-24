import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";

describe("App", () => {
  test("Render", () => {
    const wrapper = mount(<App />);
 
    expect(wrapper.find(App).exists()).toBeTruthy();
    // expect(wrapper.find(Logo).exists()).toBeTruthy();
    // expect(wrapper.find(Navigation).exists()).toBeTruthy();
  });
});
