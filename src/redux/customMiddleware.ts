import { decrement } from "./Actions"
import store from "./store"

export const middleware1 = (storeApi) => (next) => (action) => {
  console.info('middelware 1, dispatching', action)
  let result = next(action)
  console.info('middelware 1, state after dispatching', storeApi.getState())
  console.info('middelware 2, dispatched action', action)
  return result
}

export const middleware2 = (storeApi) => (next) => (action) => {
  console.info('middelware 2, dispatching', action)
  let result = next(action)
  console.info('middelware 2, state after dispatching', storeApi.getState())
  console.info('middelware 2, dispatched action', action)
  return result
}

export const middleware3 = (storeApi) => (next) => (action) => {
  if (action.type === 'counter/incremented') {
    console.info('middelware 3, dispatching', action)
    console.info('middelware 3, state before dispatching', storeApi.getState().counter.value)
    action.type = 'counter/decremented'
    let result = next(action)
    console.info('middelware 3, altered state after dispatching', storeApi.getState().counter.value)
    console.info('middelware 3, dispatched action', action)
    return result
  }
  return next(action)
}