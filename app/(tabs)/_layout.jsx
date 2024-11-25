import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Redirect, Tabs } from 'expo-router';
import { useSession } from '../../utils/ctx'
import { useEffect } from 'react';
export default function TabLayout() {
  const { session, isLoading, signOut } = useSession()

  useEffect(() => {
    // const expired = isTokenExpired(convertUser(session))
    if (!session) {
      signOut()
    }
  }, [session, signOut]) // Ejecutar efecto si el estado de sesión cambia

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Loading...</Text>
      </View>
    )
  }

  if (!session) {
    return <Redirect href='/' />
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerShown: false,
        }}
        />
    </Tabs>
  );
}