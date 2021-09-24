import React from "react";
import renderer from "react-test-renderer";
import Counter from "./counter";

describe("Counter", () => {
  const props = {
    caption: "Test Counter"
  };
  xtest("Should render", () => {
    const component = renderer.create(<Counter {...props} />);
    let tree = component.toJSON();
    //expect(tree).toMatchSnapshot();
  });
});
