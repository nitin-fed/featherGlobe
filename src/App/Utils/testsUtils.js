import rootReducer from "../Store/Reducers";
import checkPropTypes from "check-prop-types";
import { createStoreWithMiddleware } from "../Store/createStore";

export const storeFactory = initialState => {
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, confirmProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
