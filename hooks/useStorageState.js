import React from 'react'
import * as SecureStore from 'expo-secure-store'
import { Platform } from 'react-native'

function useAsyncState (initialValue = [true, null]) {
  return React.useReducer(
    (state, action = null) => [false, action],
    initialValue
  )
}

export const setStorageItemAsync = async (key, value) => {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        window.localStorage.removeItem(key)
      } else {
        window.localStorage.setItem(key, value)
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e)
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key)
    } else {
      await SecureStore.setItemAsync(key, value)
    }
  }
}

export function useStorageState (key) {
  const [state, setState] = useAsyncState()

  React.useEffect(() => {
    if (Platform.OS === 'web') {
      try {
        if (typeof localStorage !== 'undefined') {
          setState(window.localStorage.getItem(key))
        }
      } catch (e) {
        console.error('Local storage is unavailable:', e)
      }
    } else {
      SecureStore.getItemAsync(key).then(value => {
        setState(value)
      })
    }
  }, [key, setState])

  const setValue = React.useCallback(
    (value) => {
      setState(value)
      setStorageItemAsync(key, value)
    },
    [key, setState]
  )

  return [state, setValue]
}
