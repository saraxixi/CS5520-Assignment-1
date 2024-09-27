import { SafeAreaView, StyleSheet, Text, View, Button, Modal, TextInput, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'

export default function GameScreen({userData}) {
  const [gameStarted, setGameStarted] = useState(false)
  const [timer, setTimer] = useState(60)
  const [userInput, setUserInput] = useState('')
  const [attemptsLeft, setAttemptsLeft] = useState(4)
  const [chosenNumber, setChosenNumber] = useState(null)
  const [guesses, setGuesses] = useState(null)
  const [hintUsed, setHintUsed] = useState(false)
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [showGameOverModal, setShowGameOverModal] = useState(false)
  const [hintMessage, setHintMessage] = useState('')

  const lastDigit = userData.phone ? userData.phone.toString().slice(-1) : '';
  const multiples = lastDigit !== '' ? Array.from({ length: Math.floor(100 / lastDigit) }, (_, i) => (i + 1) * lastDigit) : [];

  useEffect(() => {
    if (gameStarted && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(timer => timer - 1)
      }, 1000)
      return () => clearInterval(intervalId)
    }

    if (timer === 0) {
      Alert.alert('Time is up!', 'You ran out of time. Please try again.')
      restartGame()
    }
  }, [gameStarted, timer])

  useEffect(() => {
    if (chosenNumber !== null) {
      console.debug("The chosen number is: ", chosenNumber);
    }
  }, [chosenNumber]);

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

  function useHint() {
    setHintUsed(true)
    if(chosenNumber) {
      const hint = chosenNumber % 2 === 0 ? 'The chosen number is even.' : 'The chosen number is odd.';
      Alert.alert('Hint', hint)
    }
    console.debug("Pressed Hint")
  }

  function submitGuess() {
    const guess = parseInt(userInput)
    if (guess === chosenNumber) {
      Alert.alert('You won!', 'Congratulations! You guessed the number correctly.')
      restartGame()
    } else {
      setAttemptsLeft(attemptsLeft - 1)
      setGuesses(guesses => guesses ? [...guesses, guess] : [guess])
      if (attemptsLeft === 0) {
        Alert.alert('Game over', `You ran out of attempts. The correct number was ${chosenNumber}.`)
        restartGame()
      }
    }
    console.debug("Pressed Submit")
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Restart" onPress={restartGame}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Guess a number between 1 & 100</Text>
          <Text style={styles.text}>that is multiply of {lastDigit}</Text>

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
              <Button title="Use a Hint" onPress={useHint} disabled={hintUsed}/>
              <Button title="Submit guess" onPress={submitGuess}/>
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

  input: {
    borderBottomColor: '#7E45AB',
    borderBottomWidth: 2,
  },

  text: {
    fontSize: 16,
    color: '#7E45AB',
  },
})