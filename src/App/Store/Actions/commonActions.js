import * as actionType from "./actionType";

export const displayLoader = status => { 
  return {
    type: actionType.LOADER,
    payload: status
  };
};
