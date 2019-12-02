export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const ADD10 = 'ADD10';
export const SUBTRACT10 = 'SUBTRACT10';
export const DELETE_POST = 'DELETE_POST';
export const STORE_COUNTER = 'STORE_COUNTER';
export const CANCEL_ADDPOST = 'CANCEL_ADDPOST';
export const ADD_POST = 'ADD_POST';
export const DELETE_RESULT = 'DELETE_RESULT';
export const ADD_PERSON = 'ADD_PERSON';

export const actionCreator = (action, value) => {
  switch (action) {
    case 'add':
      return {
        type: ADD
      };

    case 'subtract':
      return {
        type: SUBTRACT
      };

    case 'add10':
      return {
        type: ADD10,
        value: value
      };

    case 'subtract10':
      return {
        type: SUBTRACT10,
        value: value
      };

    default:
      return;
  }
};

const saveResultDelay = () => {
  return {
    type: STORE_COUNTER
  };
};

export const storeResult = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResultDelay());
    }, 2000);
  };
};
//{ type: actionType.STORE_COUNTER }
