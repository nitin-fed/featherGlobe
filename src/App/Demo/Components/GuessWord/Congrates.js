import React from 'react'


import { connect } from 'react-redux';

import { addGuessedWord, updateGuessWord } from '../../../Store/Actions/actions'

const Congrates = (props) => {
    let success = props.isGuessCorrect;
    let content = null;

    function keyPressed(event) {
        if (event.key === "Enter") {
            props.onAddGuessedWord()
        }
      }

    if (success) {
        content = (<span className='alert alert-success'>Congratulation... you guessed correctly.</span>)
    } else {
        content = (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col col-sm">
                            <input
                            onKeyPress={keyPressed}
                            className='guessWordInputField'
                                onChange={(event) => props.onGuessWordChangeHandler(event)}
                                type='test' value={props.guessWord} />
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col col-sm">
                            <button 
                            
                            onClick={() => props.onAddGuessedWord()} 
                            type='submit' 
                            className="btn btn-primary">Check Word</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div >
            {content}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        guessedWords: state.guessedWordsReducer.guessedWords,
        guessWord: state.guessedWordsReducer.guessWord,
        isGuessCorrect: state.guessedWordsReducer.isGuessCorrect
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddGuessedWord: word => dispatch(addGuessedWord(word)),
        onGuessWordChangeHandler: evt => dispatch(updateGuessWord(evt))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Congrates)
