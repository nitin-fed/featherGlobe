import * as actionType from '../../Store/Actions/actionType'

const initialState = {
  counter: 10,
  results: []
};

export function counterReducer(state = initialState, action) {
  //console.log(action.value);
  debugger
  switch (action.type) {
    case actionType.STORE_COUNTER:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };

    case actionType.ADD_CTR:
      return {
        ...state,
        counter: state.counter + 1
      };

    case actionType.SUBTRACT_CTR:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionType.ADD10:
      return {
        ...state,
        counter: state.counter + action.value
      };

    case actionType.SUBTRACT10:
      return {
        ...state,
        counter: state.counter - action.value
      };

    case actionType.DELETE_RESULT:
      const updatedResult = state.results.filter(
        item => item.id !== action.value
      );
      return {
        ...state,
        results: updatedResult
      };
      
     case actionType.CAL_BUTTON_GROUP: 
     return {
       ...state, 

     }

    default:
      return state;
  }
};

