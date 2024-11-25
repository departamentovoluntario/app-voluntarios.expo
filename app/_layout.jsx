import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name="register" options={{ title: 'Register', headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'Inicio' }} />
    </Stack>
  );
}