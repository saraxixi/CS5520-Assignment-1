import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  // const [modalVisible, setModalVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Start');
  const [userData, setUserData] = useState({name: '', email: '', phone: ''});

  function switchScreens() {
    switch (currentScreen) {
      case 'Start':
        return <StartScreen navigate={setCurrentScreen} userData={userData} setUserData={setUserData}/>
      case 'Game':
        return <GameScreen userData={userData}/>;
      default:
        return null;
    }
  }

  return (
    <LinearGradient
      colors={['#90CAF9', '#A4C1F2', '#9FA8DA']}
      style={styles.background}
    >
    {switchScreens()}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
