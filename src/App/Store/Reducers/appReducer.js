/** @format */

const initialState = {
  appName: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "home":
      return {
        ...state,
        appName: ""
      };

    case "profile":
      return {
        ...state,
        appName: "My Profile"
      };

    case "photography":
      return {
        ...state,
        appName: "Photography"
      };

    case "demo":
      return {
        ...state,
        appName: "Demos"
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
