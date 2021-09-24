import * as actionType from '../../Store/Actions/actionType'

const initialState = {
  counter: 10,
  results: [],
  calScreen: 0
};

const numArr = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

let num =0;
let isTyping = true;

export function counterReducer(state = initialState, action) {
  //console.log(action.value);
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

      if (action.payload === '+') {
        isTyping = false;
      } else {
        isTyping = true
      }
  
  
      if(isTyping) {
        num = getNumber(action.payload)
      } else {
        //num1 = num
      }

     
      function getNumber(num) {
        if(numArr.indexOf(parseInt(action.payload)) !== -1) {
          return parseInt(state.calScreen + action.payload)
        }
      }

      return {
        ...state,
        calScreen: num

      }

    default:
      return state;
  }
};



