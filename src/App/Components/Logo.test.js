import React from "react";
import Logo from "./Logo";
import { mount } from "enzyme";
import { store } from "../Store/createStore";
import * as redux from "react-redux";

import { Provider } from "react-redux";
import { Loader } from "./Loader";
const spy = jest.spyOn(redux, "useSelector");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Logo", () => {
  it("Render", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Logo />
      </Provider>
    );
    expect(wrapper.find(Logo).exists()).toBeTruthy();
    expect(wrapper.find(Loader).exists()).toBeFalsy();
  });

  it("Show loader", () => {
    spy.mockReturnValue({ displayLoader: true });
    const wrapper = mount(
      <Provider store={store}>
        <Logo />
      </Provider>
    );
    expect(wrapper.find(Logo).exists()).toBeTruthy();
    expect(wrapper.find(Loader).exists()).toBeTruthy();
  });
});
