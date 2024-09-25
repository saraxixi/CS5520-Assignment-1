import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import Input from './components/Input';
import Checkbox from './components/Checkbox';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPhoneValid, setPhoneValid] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function clearInputs() {
    setName('');
    setEmail('');
    setPhone('');
  }

  function handleRegister() {
    if (isNameValid && isEmailValid && isPhoneValid) {
      setModalVisible(true);
    } else {
      alert('Please fill out all fields with valid information');
    }
  }

  return (
    <View style={styles.background}>
      {/* Header */}
      <Text style={styles.header}>Welcome</Text>

      {/* Form Container */}
      <View style={styles.container}>
        <Input
          title="Name"
          value={name}
          onChangeText={setName}
          shouldFocus={false}
          isInputValid={isEmailValid}
          setInputValid={setNameValid}
        />
        <Input
          title="Email"
          value={email}
          onChangeText={setEmail}
          shouldFocus={false}
          isInputValid={isEmailValid}
          setInputValid={setEmailValid}
        />
        <Input
          title="Phone Number"
          value={phone}
          onChangeText={setPhone}
          shouldFocus={false}
          isInputValid={isPhoneValid}
          setInputValid={setPhoneValid}
        />

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
            onPress={handleRegister}
          />
        </View>

      </View>
        
      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        // animationType='slide'
        onRequestClose={() => setModalVisible(false)}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}
          style={styles.modalBackground}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Thank you for registering!</Text>
            <Button
              title="Close"
              onPress={() => setModalVisible(false)}
            />
        </View>
        </LinearGradient>
      </Modal>
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
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
