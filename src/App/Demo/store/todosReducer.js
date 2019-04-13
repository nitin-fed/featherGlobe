const initialState = {
  task: "",
  status: "",
  id: "",
  todos: []
};

const todosReducer = (state = initialState, action) => {
  console.log(action.type, action.payload);

  switch (action.type) {
    case "ADD":
      if (action.payload.task !== "") {
        return {
          ...state,
          todos: state.todos.concat({
            task: action.payload.task,
            id: action.payload.id,
            status: action.payload.status
          })
        };
      }
      break;

    case "DELETE":
      const updatedResult = state.todos.filter(todo => todo.id !== action.id);
      return {
        ...state,
        todos: updatedResult
      };

      case 'UPDATE_STATUS':
      console.log('updated')
      return{
          ...state
      }
     
      
    //   const updatedResult = state.todos.filter(todo => todo.id !== action.id);
    //   updatedResult.concat({ task: action.payload.task,
    //     id: action.payload.id,
    //     status: action.payload.status})
    //   return {
    //     ...state,
    //     todos: updatedResult

    //   }
    break

    default:
      return state;
  }
};

export default todosReducer;
