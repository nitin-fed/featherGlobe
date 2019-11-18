import React from 'react'
import renderer from 'react-test-renderer'
import { PostDescription } from './PostDescription';


describe('Post Description', () => {
    const props = {
        show: true,
        onBackdropClicked: jest.fn(),
        selectedPost: 1
    }
    test('Should render', () => {
        const component = renderer.create(<PostDescription {...props} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('Should render if show === false', () => {
        const newProps = {
            ...props,
            show: false
        }
        const component = renderer.create(<PostDescription {...newProps} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })


});