import { useReducer, createContext } from 'react'

export const Store = createContext()

const initialState = {
  user: null
}

function reducer (state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export function StoreProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
