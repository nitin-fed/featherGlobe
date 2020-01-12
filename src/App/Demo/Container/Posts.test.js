import React from 'react'
import { mapStateToProps, mapDispatchToProps } from './Posts'

import * as actions from '../../Store/Actions/actions'

describe('Posts Container', () => {
    test('mapstateToProps', () => {
        const initialState = {
            posts: {}
        }
        expect(mapDispatchToProps(initialState))
        //expect(mapStateToProps(initialState.posts).toEqual('somethins'))
    })

    xit('mapdispatchToProps', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).actions.deletePost();
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ROLL_DICE' });
    })


});
