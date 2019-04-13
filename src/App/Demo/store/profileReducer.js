const initialState = {
    person: {
        name:'Nitin',
        age: '50'
    }, 
    persons: []
}

const reducer = (state=initialState, action) => {
 // console.log(state)
    if(action.type === 'ADDPERSON') {
        return {
            ...state,
            name: action.value.name,
            age: action.value.age,
            persons: state.persons.concat({name: 'Jan', age:'55'})
            
        }
    } else {
        return state;
    }
}

export default reducer;

