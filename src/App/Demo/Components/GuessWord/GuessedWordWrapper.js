import React from 'react'
import { GuessWord } from './GuessWord';
import Congrates from './Congrates';

export const GuessWordWrapper = ({ word, onAddGuessedWord, guessedWords }) => {
    console.log(word)
    debugger
    return (
        <div className="bodyContents">

            <table>
                <tr>
                    <td>
                        <Congrates clickHandler={onAddGuessedWord} />
                    </td>
                    <td>
                     <table className="table">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Guessed Word</th>
                        <th scope="col">Letter Matched</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            guessedWords.map( item => {
                                return(<GuessWord />)
                            })
                        }
                          
                            </tbody>
            </table>      
                           
                        
                    </td>
                </tr>
            </table>
        </div>
    )
}