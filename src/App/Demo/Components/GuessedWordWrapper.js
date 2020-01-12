import React from 'react'
import { GuessWord } from './GuessWord';
import { Congrates } from './Congrates';

export const GuessWordWrapper = ({word, onAddGuessedWord}) => {
console.log(word)
    debugger
    return (
        <div className="bodyContents">
            <br />
            <Congrates clickHandler={onAddGuessedWord} />
            <GuessWord  />
        </div>
    )
}