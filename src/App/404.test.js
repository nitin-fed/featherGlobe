import React from 'react'
import renderer from 'react-test-renderer'
import MissingPage from './404'


describe('404', () => {
    test('Should render', () => {
        const component = renderer.create(<MissingPage  />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        
    })
});

