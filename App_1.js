import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowBox}>
        <Text style={styles.test}>Hello!!!</Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.test}>Hello!!!</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    color: '#fff'
  },
  yellowBox: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  blueBox: {
    flex: 1,
    backgroundColor: 'blue'
  }


});
