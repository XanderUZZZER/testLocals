import store from './redux/store'
import { decrement, fetchUsers, increment } from './redux/Actions'

// Handle user inputs by "dispatching" action objects,
// which should describe "what happened" in the app
document.getElementById('increment').addEventListener(
  'click',
  () => store.dispatch(increment())
);

document.getElementById('decrement').addEventListener(
  'click',
  () => store.dispatch(decrement())
);

document.getElementById('incrementIfOdd').addEventListener(
  'click',
  () => {
    // We can write logic to decide what to do based on the state
    if (store.getState().counter.value % 2 !== 0) {
      store.dispatch(increment())
    }
  });

document.getElementById('incrementAsync').addEventListener(
  'click',
  () => {
    // We can also write async logic that interacts with the store
    setTimeout(() => store.dispatch(increment()), 1000)
  });

const valueEl = document.getElementById('value')

const render = () => {
  const state = store.getState()
  valueEl.innerHTML = state.counter.value.toString()
}

render()

store.subscribe(render)
console.log('index end');
