import React from "react";
import PropTypes from "prop-types";

export const GuessedWords = props => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the word!!!</span>
    );
  } else {
    const guessedWordRow = props.guessedWords.map((word, index) => {
      return (
        <tr data-test="guessed-word" key={index}>
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    });
    contents = (
      <div data-test="guessed-words">
        <h3>Gussed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guesses</th>
              <th>Letter Match Count</th>
            </tr>
          </thead>
          <tbody>{guessedWordRow}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  )
};
