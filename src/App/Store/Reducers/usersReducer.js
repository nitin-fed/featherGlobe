import * as actionType from '../Actions/actionType'

const initialState = {
    userData: [],
    selectedUser: {},
    showBackDrop: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.FETCH_USERS: {
            return {
                ...state,
                userData: action.data
            };
        }
        case actionType.FETCH_SELECTED_USER: {
            return {
                ...state,
                selectedUser: action.data,
                showBackDrop: true
            }
        }
        case actionType.BACKDROP_CLICKED:{
            return{
                ...state,
                showBackDrop: false
            }
        }

        default:
            return {
                ...state
            };
    }
};

export default reducer;
