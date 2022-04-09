import React from "react";
import { shallow } from "enzyme";
import { GuessedWords } from "./GuessedWords";
import { checkProps, findByTestAttr } from "../Utils/testsUtils";

const defaultProps = [{ guessedWord: "train", letterMatchCount: 3 }];

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe("If No word gussed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  it("should Render", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  it("Render instructions", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("If word gussed", () => {
  const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  it("should Render guess word block", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  it("Render guessed word section", () => {
    const guessedWordNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordNode.length).toBe(1);
  });

  it("Correct num of guessed Words", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(GuessedWords.length);
  });
});

describe("Test PropTypes", () => {
  checkProps(GuessedWords, defaultProps);
});
