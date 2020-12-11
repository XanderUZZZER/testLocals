const initialState = {
  todos: []
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/fetchTodos':
    case 'todos/todosLoaded':
    default:
      return state
  }
}