import { SafeAreaView, StyleSheet, Text, View, Button, Modal } from 'react-native'
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import ConfirmScreen from './ConfirmScreen'

export default function StartScreen({navigate, userData, setUserData}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPhoneValid, setPhoneValid] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function clearInputs() {
    setName('');
    setEmail('');
    setPhone('');
  }

  function handleRegister() {
    if (isNameValid && isEmailValid && isPhoneValid && isChecked) {
      setUserData({name, email, phone});
      setModalVisible(true);
    } else {
      alert('Please fill out all fields with valid information');
    }
  }

  return (
    <SafeAreaView>
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
        <Checkbox isChecked={isChecked} setChecked={setChecked}/>

        {/* Reset and Register Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            color={'red'}
            onPress={clearInputs}
          />
          <Button
            title="Register"
            onPress={handleRegister}
          />
          <StatusBar style='auto' />
        </View>
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
      >
        <ConfirmScreen setModalVisible={setModalVisible} navigate={navigate} userData={userData}/>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    padding: 20,
    width: '80%',
    textAlign: 'center',
    marginTop: 30,
    alignSelf: 'center',
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
})