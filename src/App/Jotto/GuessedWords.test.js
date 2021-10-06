import React from "react";
import { shallow } from "enzyme";
import { GuessedWords } from "./GuessedWords";
import { checkProps, findByTestAttr } from "./testUtils";
import { exportAllDeclaration } from "@babel/types";

const defaultProps = [{ guessedWord: "train", letterMatchCount: 3 }];
const props = {};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe("If No word gussed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWord: [] });
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

describe("If word gussed", () => {});

describe("Test PropTypes", () => {
  checkProps(GuessedWords, defaultProps);
});
