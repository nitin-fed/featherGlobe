import { secretWordReducer } from "./index";
import * as actionTypes from "../../Store/Actions/actionType";

describe("Secret Reducer", () => {
  it("Return undefined", () => {
    const newState = secretWordReducer(undefined, {});
    expect(newState).toStrictEqual(false);
  });

  it("Return original state for unknown action type", () => {
    const newState = secretWordReducer(false, { type: "unknown" });
    expect(newState).toStrictEqual(false);
  });

  it("Return try for action type === CORRECT_GUESS", () => {
    const newState = secretWordReducer(false, {
      type: actionTypes.CORRECT_GUESS
    });
    expect(newState).toStrictEqual(true);
  });
});
