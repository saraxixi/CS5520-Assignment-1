import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Input({ title, value, onChangeText, shouldFocus }) {
  const[messages, setMessages] = useState('');
  const[isFocused, setIsFocused] = useState(false);
  
  function validateInput(type, value) {
    if (type === 'Name') {
        return value.length > 2;
    } else if (type === 'Email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    } else if (type === 'Phone Number') {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(value);
    }

    return false;
  }

  useEffect(() => {
    if (!validateInput(title, value) && isFocused) {
        setMessages('Please enter a valid ' + title.toLowerCase());
      } else {
        setMessages('');
      }
    }, [value, isFocused]);

  function handleBlur() {
    setIsFocused(false);
    if (!validateInput(title, value)) {
      setMessages(`Please enter a valid ${title.toLowerCase()}`);
    }
  }

  function handleFocus() {
    setIsFocused(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        keyboardType = 'default'
        value = {value}
        onChangeText = {onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoFocus={shouldFocus}
        autoCapitalize='none'
      />
      {messages !== "" && <Text style = {styles.messages}>{messages}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 40,
    },

    title: {
      fontSize: 18,
      color: '#7E45AB',
      textAlign: 'left',
      marginBottom: 10,
    },

    input: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#7E45AB',
      width: '100%',
      height: 40,
      borderBottomWidth: 2,
      borderBottomColor: '#7E45AB',
    },

    messages: {
      color: 'grey',
    },
})