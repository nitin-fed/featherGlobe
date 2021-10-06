import React from "react";
import { Posts } from "./Posts";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import { store } from "../../Store/createStore";

jest.mock("../../Services/FetchPosts");

import { fetchPosts as mockfetchPosts } from "../../Services/FetchPosts";

const props = {
  onLoadPostDescription: jest.fn(),
  show: true,
  onDeletePost: jest.fn(),
  onAddPost: jest.fn()
};

describe("Posts", () => {
  it("Render", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Posts {...props} />
      </Provider>
    );
    expect(wrapper.find(Posts).exists()).toBeTruthy();
    expect(wrapper.find("h1").text()).toEqual("No Posts Found.");
  });
});

describe("Fetch Posts", () => {
  beforeEach(() => {
    mockfetchPosts.mockClear();
  });

  it("fetchPosts returns object", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Posts {...props} />
      </Provider>
    );

    expect(mockfetchPosts).toHaveBeenCalledTimes(1);
    mockfetchPosts.mockClear();
    wrapper.setProps();
    expect(mockfetchPosts).toHaveBeenCalledTimes(0);
  });
});
