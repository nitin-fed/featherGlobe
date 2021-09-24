
import { connect } from 'react-redux';
import { GuessWordWrapper } from '../Components/GuessWord/GuessedWordWrapper';
import { addGuessedWord, updateGuessWord, deleteRow } from '../../Store/Actions/actions'

const mapStateToProps = (state) => {
    return {
        guessedWords: state.guessedWordsReducer.guessedWords,
        guessWord: state.guessedWordsReducer.guessWord,
        matchWordArr: state.guessedWordsReducer.matchWordArr
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddGuessedWord: word => dispatch(addGuessedWord(word)),
        onGuessWordChangeHandler: evt => dispatch(updateGuessWord(evt)),
        onDelete: (id) => dispatch(deleteRow(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessWordWrapper)
