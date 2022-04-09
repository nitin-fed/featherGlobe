import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { GuessedWords } from "./GuessedWords";
import { Congrats } from "./Congrats";
import { getSecretWord } from "./Jotto_Actions";
import { useDispatch, useSelector } from "react-redux";

export const JottoApp = () => {
  const success = false;
  const secretWord = "party";
  const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];

  

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div data-test="component-app" className="container main">
      <h1>Jotto</h1>
      <hr />
      <div className="alert alert-warning">
        <Input success={success} secretWord={secretWord} />
      </div>
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};
