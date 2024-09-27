import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function GameScreen() {
  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <Button title="Restart" onPress={() => console.debug("Pressed Restart")}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})