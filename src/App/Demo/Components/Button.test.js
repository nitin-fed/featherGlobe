import React from 'react'
import renderer from 'react-test-renderer'
import Buttons from './button';


describe('Button', () => {
    const props = {
       caption: 'Test Button'
    }
    test('Should render', () => {
        const component = renderer.create(<Buttons {...props} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});