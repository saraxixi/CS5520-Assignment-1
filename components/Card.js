import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

export default function Card({title, message, imageSource, buttonText1, onPress1, buttonText2, onPress2}) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{message}</Text>
      {imageSource && (
        <Image 
          source={typeof imageSource === 'string' ? { uri: imageSource } : imageSource} 
          style={styles.image}
        />
      )}
      {buttonText1 && <Button title={buttonText1} onPress={onPress1} />}
      {buttonText2 && <Button title={buttonText2} onPress={onPress2} />}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#7E45AB',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
})