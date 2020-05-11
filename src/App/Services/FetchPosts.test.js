import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { initPosts } from './FetchPosts'


const mockStore = configureMockStore(thunk)



describe('Should return posts', () => {
    beforeEach(() => {
        const store = mockStore({
            posts: []
        })
    })

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore();
    })
    it('Posts', () => {
        fetchMock.getOnce('http://jsonplaceholder.typicode.com/Posts', {
            body: {
                posts: []
            },
            headers: {
                'content-type': 'application.json'
            }
        })

        const expectedAction = {
            type: ''
        } 
    })
})


