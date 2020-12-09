import { createStore } from 'redux'

const initialState = {
  value: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/incremeted':
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore(counterReducer)

const valueEl = document.getElementById('value')

const render = () => {
  const state = store.getState()
  valueEl.innerHTML = state.value.toString()
}

render()

store.subscribe(render)

console.log('index end');
