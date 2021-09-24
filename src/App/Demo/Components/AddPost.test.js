import React from "react";
import renderer from "react-test-renderer";
import { AddPost } from "./AddPost";

describe("Add Posts", () => {
  const props = {
    isVisible: true,
    isEditing: true,
    cancelHandler: jest.fn(),
    submitHandler: jest.fn(),
    postId: 1,
    posts: [
      {
        body: "test post body",
        id: 1,
        title: "test post title",
        userId: 1
      },
      {
        body: "test post body",
        id: 2,
        title: "test post title",
        userId: 2
      }
    ]
  };
  test("Should render isEditing  === true", () => {
    const component = renderer.create(<AddPost {...props} />);
    let tree = component.toJSON();
    //expect(tree).toMatchSnapshot();
  });

  test("Should render if isEditing === false", () => {
    const newProps = {
      ...props,
      isEditing: false
    };
    const component = renderer.create(
      <AddPost isEditing="false" {...newProps} />
    );
    let tree = component.toJSON();
    //expect(tree).toMatchSnapshot();
  });

  test("Should render if isVisible === false", () => {
    const newProps = {
      ...props,
      isVisible: false
    };
    const component = renderer.create(
      <AddPost isEditing="false" {...newProps} />
    );
    let tree = component.toJSON();
    //expect(tree).toMatchSnapshot();
  });
});
