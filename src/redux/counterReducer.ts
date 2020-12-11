const initialState = {
  value: 0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/incremented':
      debugger
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      debugger
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}