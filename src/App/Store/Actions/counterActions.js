import * as actionType from './actionType'



const saveResultDelay = () => {
    return {
      type: actionType.STORE_COUNTER
    };
  };
  
  export const storeResult = () => {
    return dispatch => {
      setTimeout(() => {
        dispatch(saveResultDelay());
      }, 2000);
    };
  };
  
  export const addCounter = () => {
    return{
        type: actionType.ADD_CTR
    }
  }


  export const subtractCounter = () => {
    return{
        type: actionType.SUBTRACT_CTR
    }
  }

  export const add10 = (val) => {
    return {
        type: actionType.ADD10,
        value: val
    }
}


  export const subtract10 = (val) => {
      return {
          type: actionType.SUBTRACT10,
          value: val
      }
  }

  export const groupClick = (evt) => {
    
    return {
      type: actionType.CAL_BUTTON_GROUP,
      payload: evt.target.attributes["datalabel"].value

    }
  }



  