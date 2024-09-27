import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';

export default function App() {
  // const [modalVisible, setModalVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Start');

  function switchScreens() {
    switch (currentScreen) {
      case 'Start':
        return <StartScreen/>
      case 'Game':
        return <GameScreen/>;
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
        
    //   {/* Modal */}

    //   <StatusBar style="auto" />
    //   </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // alignItems: 'center',
  },
});
