import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (<View style={styles.container}>
      <Text>Hi, My name is Apoorve Kumar Verma</Text>
      <Text>This is My First Expo Based react-native App</Text>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
