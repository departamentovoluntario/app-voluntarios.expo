import { useContext, createContext } from 'react'
import { useStorageState } from '../hooks/useStorageState'

const AuthContext = createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false
})

// This hook can be used to access the user info.
export function useSession () {
  const value = useContext(AuthContext)
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />')
    }
  }
  return value
}

export function SessionProvider ({ children }) {
  const [[isLoading, session], setSession] = useStorageState('session')

  return (
    <AuthContext.Provider
      value={{
        signIn: (token) => {
          // Perform sign-in logic here
          console.log('token sign', token)
          setSession(token)
        },
        signOut: () => {
          console.log('cerrando')
          setSession(null)
        },
        session,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
