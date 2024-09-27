import { SafeAreaView, StyleSheet, Text, View, Button, Modal, TextInput, Alert, Image } from 'react-native'
import React, {useEffect, useState} from 'react'

export default function GameScreen({userData}) {
  const [gameStarted, setGameStarted] = useState(false)
  const [timer, setTimer] = useState(10)
  const [userInput, setUserInput] = useState('')
  const [attemptsLeft, setAttemptsLeft] = useState(4)
  const [chosenNumber, setChosenNumber] = useState(null)
  const [guesses, setGuesses] = useState([])
  const [hintUsed, setHintUsed] = useState(false)
  const [showHintCard, setShowHintCard] = useState(false)
  const [showGameOverCard, setShowGameOverCard] = useState(false)
  const [showSuccessCard, setShowSuccessCard] = useState(false)
  const [showResultCard, setShowResultCard] = useState(false)
  const [resultMessage, setResultMessage] = useState('')
  const [gameOverMessage, setGameOverMessage] = useState('')

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
      setShowGameOverCard(true)
      setGameOverMessage('You are out of time.')
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
    setGuesses([])
    setHintUsed(false)
    setShowHintCard(false)
    setShowGameOverCard(false)
    setShowResultCard(false)
    setShowSuccessCard(false)
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

    if (isNaN(guess) || guess < 1 || guess > 100) {
      Alert.alert('Invalid guess', 'Please enter a number between 1 and 100.')
      return
    }

    if (guess === chosenNumber) {
      setShowSuccessCard(true)
    } else {
      setAttemptsLeft(attemptsLeft - 1)
      setGuesses(guesses => guesses ? [...guesses, guess] : [guess])
      setResultMessage(guess < chosenNumber ? 'You should guess higher!' : 'You should guess lower!')

      if (attemptsLeft - 1 === 0) {
        setShowGameOverCard(true)
        setGameOverMessage('You are out of attempts.')
      } else {
        setShowResultCard(true)
      }
    }
    setUserInput('')
    console.debug("Pressed Submit")
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Restart" onPress={restartGame}/>
        </View>


          {gameStarted ? (
            <View style={styles.textContainer}>
              {!showResultCard && !showGameOverCard && !showSuccessCard && (
              <View style={styles.gameCard}>
                <Text style={styles.text}>Guess a number between 1 & 100</Text>
                <Text style={styles.text}>that is multiply of {lastDigit}</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  keyboardType="numeric"
                  value={userInput}
                  onChangeText={setUserInput}
                  textAlign='center'
                />
                <View style={styles.statusContainer}>
                  <Text style={styles.statusText}>Attempts left: {attemptsLeft}</Text>
                  <Text style={styles.statusText}>Timer: {timer}s</Text>
                </View>
                <Button title="Use a Hint" onPress={useHint} disabled={hintUsed}/>
                <Button title="Submit guess" onPress={submitGuess}/>
              </View>
              )}

              {showResultCard && (
                <View style={styles.resultCard}>
                  <Text style={styles.text}>You did not guess correct!</Text>
                  <Text style={styles.text}>{resultMessage}</Text>
                  <Button title="Try Again" onPress={() => setShowResultCard(false)} />
                  <Button title="End the game" onPress={() => {
                    setShowGameOverCard(true); 
                    setShowResultCard(false);
                  }} />
                </View>
              )}

              {showSuccessCard && (
                <View style={styles.successCard}>
                  <Text style={styles.text}>You guessed correct!</Text>
                  <Text style={styles.text}>Attempts used: {guesses.length + 1}</Text>
                  <Image
                    source={{ uri: `https://picsum.photos/id/${chosenNumber}/100/100` }}
                    style={styles.image}
                  />
                  <Button title="New Game" onPress={restartGame} />
                </View>
              )}

              {showGameOverCard && (
                <View style={styles.gameOverCard}>
                  <Text style={styles.text}>The Game is over!</Text>
                  <Image
                    source={require('../assets/sad.png')}
                    style={styles.image}
                  />
                  <Text style={styles.text}>{gameOverMessage}</Text>
                  <Button title="Restart" onPress={restartGame} />
                </View>
              )}
              
            </View>
            ) : (
            <View style={styles.textContainer}>
              <Text style={styles.text}>Guess a number between 1 & 100</Text>
              <Text style={styles.text}>that is multiply of {lastDigit}</Text>
              <Button title='Start' onPress={startGame}/>
            </View>
          )}
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
    width: 100,
    margin: 20,
  },

  gameCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  gameOverCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  resultCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  successCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    color: '#7E45AB',
  },

  statusContainer: {
    width: '100%',
    margin:30,
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    margin: 10,
  },

  statusText: {
    fontSize: 16,
    color: '#555555',
    alignItems: 'center',
  },
})