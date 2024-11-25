import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { theme } from '../../utils/constants'

export default function InputText(props) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
    />
  )
}

const styles = StyleSheet.create({
    input: {
        height: 55,
        borderWidth: theme.borderWidth,
        borderColor: theme.borderColor,
        borderRadius: theme.borderRadius,
        paddingHorizontal: theme.inputPaddingHorizontal
    },
})