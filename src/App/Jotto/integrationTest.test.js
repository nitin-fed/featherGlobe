import { storeFactory } from "../Utils/testsUtils";
import { getSecretWord, guessWord } from "./Jotto_Actions";

describe("Guess action dispatch", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train ";
  describe("No guess word", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    it("Update state with successful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        gussedWords: [
          {
            guessWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };
      expect(newState["gussedWords"]).toEqual(expectedState);
    });

    it("Update state with unsuccessful guess", () => {});
  });

  describe("Some Guess word", () => {
    it("Update state with successful guess", () => {});

    it("Update state with unsuccessful guess", () => {});
  });
});
