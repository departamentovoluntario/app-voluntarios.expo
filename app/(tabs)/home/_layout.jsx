import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{
            title: 'Inicio'
        }} />
        <Stack.Screen name='laboratory' options={{
            title: 'Laboratorios'
        }} />
    </Stack>
  )
}

export default _layout