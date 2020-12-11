import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { counterReducer } from './counterReducer'
import { usersReducer } from './userReducer'
import { todosReducer } from './todosReducer'

import { middleware1, middleware2, middleware3 } from './customMiddleware'


const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  todos: todosReducer
})

const middlewares = [middleware1, middleware2, middleware3]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, ...middlewares))
)

export default store

export const { dispatch } = store

