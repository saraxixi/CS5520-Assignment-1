import { SafeAreaView, StyleSheet, Text, View, Button, Modal, TextInput, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'

export default function GameScreen(userData) {
  const [gameStarted, setGameStarted] = useState(false)
  const [timer, setTimer] = useState(60)
  const [userInput, setUserInput] = useState('')
  const [attemptsLeft, setAttemptsLeft] = useState(4)
  const [guesses, setGuesses] = useState(null)
  const [hintUsed, setHintUsed] = useState(false)

  const lastDigit = userData.phone % 10
  const multiples = Array.from({length: Math.floor(100 / lastDigit)}, (_, i) => (i + 1) * lastDigit)

  useEffect(() => {
    if (gameStarted && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(timer => timer - 1)
      }, 1000)
      return () => clearInterval(interval)
    }

    if (timer === 0) {
      Alert.alert('Time is up!', 'You ran out of time. Please try again.')
      restartGame()
    }
  }, [gameStarted, timer])

  function startGame() {
    setGameStarted(true)
    setChosenNumber(multiples[Math.floor(Math.random() * multiples.length)])
    console.debug("Pressed Start")
  }

  function restartGame() {
    setGameStarted(false)
    setTimer(60)
    setUserInput('')
    setAttemptsLeft(4)
    setGuesses(null)
    console.debug("Pressed Restart")
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Restart" onPress={restartGame}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Guess a number between 1 & 100</Text>
          <Text style={styles.text}>that is multiply of {userData.phone}</Text>

          {gameStarted ? (
            <View>
              <TextInput
                style={styles.input}
                placeholder=""
                keyboardType="numeric"
                value={userInput}
                onChangeText={setUserInput}
                textAlign='center'
              />
              <Text style={styles.statusText}>Attempts left: {attemptsLeft}</Text>
              <Text style={styles.statusText}>Timer: {timer}s</Text>
              {/* <Button title="Use a Hint" onPress={useHint} color="#371D74" disabled={hintUsed} />
              <Button title="Submit guess" onPress={submitGuess} color="#371D74" /> */}
            </View>
            ) : (
            <Button title='Start' onPress={startGame}/>
          )}
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
    fontSize: 16,
    color: '#7E45AB',
  },
})