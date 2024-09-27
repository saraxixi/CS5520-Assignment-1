import { SafeAreaView, StyleSheet, Text, View, Modal, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, {useState} from 'react'

export default function ConfirmScreen({setModalVisible, userData}) {

  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.7)']}
      transparent={true}
      style={styles.modalBackground}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>Hello {userData.name}</Text>
        <Text style={styles.modalText}>Here is the information you entered:</Text>
        <Text style={styles.modalText}>Email: {userData.email}</Text>
        <Text style={styles.modalText}>Phone: {userData.phone}</Text>
        <Text style={styles.modalText}>If it is not correct, please go back and edit them.</Text>
        <View style={styles.modalButtonContainer}>
        <Button
          title="Go Back"
          color={'red'}
          onPress={() => setModalVisible(false)}
        />
        <Button
          title="Continue"
          onPress={() => setModalVisible(false)}
        />
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 20,
  },

  modalText: {
    fontSize: 16,
    color: '#7E45AB',
    textAlign: 'left',
    width: '100%',
    marginBottom: 5,
  },

  modalButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
})