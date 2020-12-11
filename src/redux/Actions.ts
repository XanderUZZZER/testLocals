import axios from "axios";


export const increment = () => ({ type: 'counter/incremented' })
export const decrement = () => ({ type: 'counter/decremented' })
export const add = () => ({ type: 'users/add' })
export const remove = () => ({ type: 'users/remove' })

export async function fetchUsers(dispatch, getState) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
  dispatch({ type: 'users/add', payload: response })
}