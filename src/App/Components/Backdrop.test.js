import React from 'react';
import Backdrop from './Backdrop';
import renderer from 'react-test-renderer';

describe('Backdrop', () => {
  test('if show === true', () => {
    const props = {
      show: true,
      onClick: jest.fn()
    };
    const component = renderer.create(<Backdrop {...props} />);
    let tree = component.toJSON();
   // expect(tree).toMatchSnapshot();
  });

  test('if show == false', () => {
    const props = {
      show: false,
      onClick: jest.fn()
    };
    const component = renderer.create(<Backdrop {...props} />);
    let tree = component.toJSON();
    //expect(tree).toMatchSnapshot();
  });
});
