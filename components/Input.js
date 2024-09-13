import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Input({title}) {
  const[text, setText] = useState('');

  function updateText(changeText) {
    setText(changeText);
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input}
        placeholder = {`Please enter a valid ${title}`}
        keyboardType = 'default'
        value = {text}
        onChangeText = {updateText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      color: '#7E45AB',
      textAlign: 'left',
      marginBottom: 10,
    },

    input: {
      width: '100%',
      height: 40,
      borderBottomWidth: 2,
      borderBottomColor: '#7E45AB',
      marginBottom: 20,
    },
})