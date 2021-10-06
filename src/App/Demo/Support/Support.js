import React from "react";

export const getSecretWord = (guessedWord, secretWord) => {
  const secretLetters = secretWord.split("");
  const gussedLetterSet = new Set(guessedWord);
  return secretLetters.filter(letter => gussedLetterSet.has(letter)).length;
};

const Support = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <h1>Support</h1>
      <button onClick={() => getSecretWord("train", "party")}>
        Secret Word
      </button>
      <button onClick={() => setShow(show ? false : true)}> Show/Hide</button>
      {show && (
        <p test-id="desc">
          This line doesn't load in test case if using React.useState
        </p>
      )}
    </>
  );
};

export default Support;
