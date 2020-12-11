const initialState = {
  users: [],
  loading: false
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/add':
      debugger
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case 'users/remove':
      debugger
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }
    default:
      return state
  }
}