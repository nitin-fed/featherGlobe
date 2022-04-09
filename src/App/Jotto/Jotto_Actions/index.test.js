import moxios from "moxios";
import { getSecretWord } from "./index";

// describe("Correct Guess", () => {
//   it("Return correct guess", () => {
//     const action = correctGuess();
//     expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
//   });
// });

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("getSecretWord returns response after promise resolve", () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: "party"
      }); 
    });
    return getSecretWord().then(response => {
      expect(response).toBe("party");
    });
  });
});
