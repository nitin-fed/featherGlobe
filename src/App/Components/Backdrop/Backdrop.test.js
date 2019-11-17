import React from 'react'
import Backdrop from './Backdrop'
import renderer from 'react-test-renderer';
import { JestEnvironment } from '@jest/environment';

describe('Backdrop should return', () => {
    test('Return null if show == false', () => {
        const props = {
            show: false
        }
        const component = renderer.create(<Backdrop props={props}/>)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Return null if show == true', () => {
        const props = {
            show: true
        }
        const component = renderer.create(<Backdrop props={props}  />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});