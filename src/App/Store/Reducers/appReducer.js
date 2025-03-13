

const initialState = {
  appName: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "home":
      return {
        ...state,
        appName: "",
      };

    case "profile":
      return {
        ...state,
        appName: "My Profile",
      };

    case "photography":
      return {
        ...state,
        appName: "Photography",
      };

    case "demo":
      return {
        ...state,
        appName: "Demos",
      };

    case "stockPhotos":
      return {
        ...state,
        appName: "Stock Photos",
      };

    case "eat":
      return {
        ...state,
        appName: "EA Transfers",
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
