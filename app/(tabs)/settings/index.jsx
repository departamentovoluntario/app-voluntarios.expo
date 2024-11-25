import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export class index extends Component {
  render() {
    return (
      <View>
        <Text>Ajustes</Text>
        <Link href='/'>Ir a login</Link>
      </View>
    )
  }
}

export default index