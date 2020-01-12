import React from 'react'
import renderer from 'react-test-renderer'

import { GuessWord } from './GuessWord'


describe('Guess Word', () => {
    test('Should render', () => {
        const wrapper = renderer.create(<GuessWord />)
  //      const appComponent  = wrapper.root
//const comp = appComponent.findByProps({className: 'nitin'}).children.length
       // expect(comp).toBe(1);
    })
})