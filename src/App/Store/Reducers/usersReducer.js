import * as actionType from '../Actions/actionType'

const initialState = {
    userData: [],
    selectedUser: {}
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.FETCH_USERS: {
            console.log(action.data)
            return {
                ...state,
                userData: action.data
            };
        }
        case actionType.FETCH_SELECTED_USER: {
            console.log(action.data)
            return {
                ...state,
                selectedUser: action.data
            }
        }

        default:
            return {
                ...state
            };
    }
};

export default reducer;
