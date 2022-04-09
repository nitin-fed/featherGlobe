/**
 * This is functional test file. NOT UNIT TEST
 */

import React from "react";
import { mount } from "enzyme";
import { JottoApp } from "./JottoApp";
import { findByTestAttr } from "../Utils/testsUtils";

const setup = (state = {}) => {
  const wrapper = mount(<JottoApp />);

  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("Functional Test - No word guess", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      success: false,
      secretWord: "party",
      guessedWords: []
    });
  });
  console.log(wrapper.debug());

  it("should render", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe("Some words guess", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      success: false,
      secretWord: "party",
      guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
    });
  });

  it("Should have multiple rows", () => {
    const guessedWordsRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsRow).toHaveLength(2);
  });
});

describe("Guess secrat word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      success: false,
      secretWord: "party",
      guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
    });
  });

  const mockEvent = { target: { value: "party" } };
  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", mockEvent);

  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  it("Should have multiple rows", () => {
    const guessedWordsRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsRow).toHaveLength(3);
  });

  it("Does not display input field", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(inputBox.exists()).toBe(false);
    expect(submitButton.exists()).toBe(false);
  });
});
