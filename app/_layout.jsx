import { Stack } from 'expo-router/stack';
import { SessionProvider } from '../utils/ctx'
export default function Layout() {
  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="register" options={{ title: 'Register', headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'Inicio' }} />
      </Stack>
    </SessionProvider>
  );
}