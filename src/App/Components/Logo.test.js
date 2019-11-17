import React from 'react'
import renderer from 'react-test-renderer'
import Logo from './Logo'

describe('Logo', () => {
    it('Should render logo', () => {
        const component = renderer.create(<Logo />)
        const tree = component.toJSON();
        console.log(tree)
        expect(tree).toMatchSnapshot();
    })
})