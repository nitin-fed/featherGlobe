import React from "react";
import { findByTestAttr } from "../Utils/testsUtils";
import { shallow, mount } from "enzyme";
import { JottoApp } from "./JottoApp";

jest.mock("./Jotto_Actions");
import { getSecretWord as mockGetSecretWord } from "./Jotto_Actions";

const setup = (props = {}) => {
  return mount(<JottoApp {...props} />);
};
describe("Jotto App", () => {
  it("should Render", async () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent).toHaveLength(1);
  });
});

describe("getSecretWord", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  it("Get secret word on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  it("Should not load on app updated", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
