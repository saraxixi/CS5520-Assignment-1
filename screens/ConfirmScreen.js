import { SafeAreaView, StyleSheet, Text, View, Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, {useState} from 'react'

export default function ConfirmScreen() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <SafeAreaView>
      <Modal
        transparent={true}
        visible={modalVisible}
      >
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.7)']}
          transparent={true}
          style={styles.modalBackground}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              {`Hello ${name}!\nHere is the information you entered:\n${email}\n${phone}\nIf it is not correct, please go back and edit them.`}
            </Text>
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
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})