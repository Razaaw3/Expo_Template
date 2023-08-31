import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Color from '@/Helper/Color';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start on your apd!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
