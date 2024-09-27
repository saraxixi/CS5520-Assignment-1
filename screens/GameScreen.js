import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function GameScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Restart" onPress={() => console.debug("Pressed Restart")}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Game Screen</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: 20,
  },

  textContainer: {
    backgroundColor: 'lightgrey',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A00E2',
  },
})