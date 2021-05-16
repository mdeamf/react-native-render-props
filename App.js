import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GreetingsComponent } from './src/components/GreetingsComponent';

export default function App() {
  const checkClient = (clientCode) => {
    if (clientCode === 1) return <Text>Important client!</Text>
    return <Text>Common client!</Text>
  }

  return (
    <View style={styles.container}>
      
      <GreetingsComponent getClientName={checkClient} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
