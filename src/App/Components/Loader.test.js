import React from "react";
import { mount } from "enzyme";

import { Loader } from "./Loader";

describe("Loader", () => {
  it("Render", () => {
    const wrapper = mount(<Loader />);
    expect(wrapper.find(Loader).exists()).toBe(true);
  });
});
