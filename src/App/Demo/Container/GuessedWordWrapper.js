import React from 'react'
import { connect } from 'react-redux';
import { GuessWordWrapper } from '../Components/GuessWord/GuessedWordWrapper';
import { addGuessedWord, updateGuessWord } from '../../Store/Actions/actions'

const mapStateToProps = (state) => {
    return {
        guessedWords: state.guessedWordsReducer.guessedWords,
        guessWord: state.guessedWordsReducer.guessWord
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddGuessedWord: word => dispatch(addGuessedWord(word)),
        onGuessWordChangeHandler: evt => dispatch(updateGuessWord(evt))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessWordWrapper)
