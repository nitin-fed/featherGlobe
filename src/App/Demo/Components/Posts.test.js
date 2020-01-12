import React from 'react';
import renderer from 'react-test-renderer';
import { Posts } from './Posts';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { storeFactory } from '../../Utils/testsUtils'

const initialState = {
  postReducer: {
    posts: [],
    postId: 0,
    isAddPostVisible: false,
    isEditing: false,
    showBackdrop: false,
    selectedPost: {}
  }
};

const store = storeFactory(initialState)

describe('Posts', () => {
  let props = {};
  beforeEach(() => {
    props = {
      onFetchPosts: jest.fn(),
      posts: [
        {
          body: 'test post body',
          id: 1,
          title: 'test post title',
          userId: 1
        },
        {
          body: 'test post body',
          id: 2,
          title: 'test post title',
          userId: 2
        }
      ],
      onLoadPostDescription: jest.fn(),
      show: true,
      onDeletePost: jest.fn(),
      onAddPost: jest.fn()
    };
  });

  const renderWithStore = (p) => {
    return renderer.create(
      <Provider store={store}>
        <Posts  {...p} />
        </Provider>
    );
  };



  it('Should render if posts===obj', () => {
    const component = renderWithStore(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render if posts===undefined', () => {
    const newProps = {
      ...props,
      posts: undefined
    };
    const component = renderWithStore(newProps);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('button click', () => {
    const component = renderWithStore(props);
    const tree = component.toJSON();
    const myButton = tree.children.find(item => {
      return item.type === 'button';
    });

    myButton.props.onClick({
      target: { value: 'blue' }
    });
    expect(onAddPost).toHaveBeenCalledWith('blue');
  });
});
