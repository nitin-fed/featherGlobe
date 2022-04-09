import React from "react";
import { GuessWord } from "./GuessWord";
import Congrates from "./Congrates";
import "./Guess.css";

export const GuessWordWrapper = ({
  word,
  onAddGuessedWord,
  guessedWords,
  onDelete
}) => {
  return (
    <div className="bodyContents">
      <table>
        <tbody>
          <tr>
            <td className="left">
              <Congrates clickHandler={onAddGuessedWord} />
            </td>
            <td>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">
                      <input type="checkbox" />
                    </th>
                    <th scope="col">
                      {" "}
                      <span className="redText">Guessed</span> Word
                    </th>
                    <th scope="col">Letter Matched</th>
                  </tr>
                </thead>
                <tbody
                  role="status"
                  aria-live="assertive"
                  aria-atomic="true"
                  aria-relevant="additions"
                >
                  {guessedWords.map(item => {
                    return <GuessWord onDelete={onDelete} item={item} />;
                  })}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
