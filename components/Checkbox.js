import { StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import { CheckBox } from 'react-native-elements'

export default function Checkbox({ isChecked, setChecked }) {

  return (
    <View style={styles.container}>
        <CheckBox
            containerStyle={styles.CheckBox}
            checked={isChecked}
            onPress={() => setChecked(!isChecked)}
        />
        <Text style={styles.text}>I am not a robat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'left',
    },

    CheckBox: {
        padding: 0,
        margin: 0,
    },

    text: {
        fontSize: 16,
        color: '#7E45AB',
    }
})