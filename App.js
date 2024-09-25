import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import Input from './components/Input';
import Checkbox from './components/Checkbox';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function clearInputs() {
    setName('');
    setEmail('');
    setPhone('');
  }

  return (
    <View style={styles.background}>
      {/* Header */}
      <Text style={styles.header}>Welcome</Text>

      {/* Form Container */}
      <View style={styles.container}>
        <Input title="Name" value={name} onChangeText={setName} shouldFocus={false}/>
        <Input title="Email" value={email} onChangeText={setEmail} shouldFocus={false}/>
        <Input title="Phone Number" value={phone} onChangeText={setPhone} shouldFocus={false}/>

        {/* Checkbox for robat */}
        <Checkbox/>

        {/* Reset and Register Button */}
        <View style={styles.buttonContainer}>
          <Button 
            title="Reset" 
            onPress={clearInputs}
          />
          <Button
            title="Register"
            onPress={() => {}}
          />
        </View>

      </View>
      <StatusBar style="auto" />


    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#8EC9CE',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  container: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#AAAAAA',
    padding: 20,
    textAlign: 'center',
    marginTop: 30,

  },
  
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A00E2',
    textAlign: 'center',
    marginTop: 80,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  }
});
