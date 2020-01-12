import React from 'react'
import { connect } from 'react-redux';
import { GuessWordWrapper } from '../Components/GuessedWordWrapper';
import { addGuessedWord } from '../../Store/Actions/actions'

const mapStateToProps = (state) => {
    return {
        word: state.guessedWordsReducer.guessedWords
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddGuessedWord: word => dispatch(addGuessedWord(word)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessWordWrapper)
