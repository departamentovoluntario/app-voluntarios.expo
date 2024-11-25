import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { SessionProvider } from '../../../utils/ctx'

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab [Home|Laboratory]</Text>
      <Link href="/home/laboratory">Ir a laboratory</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});