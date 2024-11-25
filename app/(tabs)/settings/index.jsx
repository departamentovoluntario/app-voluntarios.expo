import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSession } from '../../../utils/ctx'
import SimpleButton from '../../../components/Buttoms/SimpleButton'
import { router } from "expo-router";

export function index() {
  const { signOut, session } = useSession()
  const closeSession = () => {
    signOut()
  }
  useEffect(()=> {
    console.log('saliendo', session)
    if (!session){
      router.push('/')
    }
  }, [session])
    return (
      <View>
        <Text>Ajustes</Text>
        <SimpleButton onPress={closeSession} text="Cerrar sesion"/>
      </View>
    )

}

export default index