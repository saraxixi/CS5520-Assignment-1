import { StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import { CheckBox } from 'react-native-elements'

export default function Checkbox() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View>
        <CheckBox
            checked={isChecked}
            onPress={() => setChecked(!isChecked)}
        />
        <Text>I am not a robat</Text>
    </View>
  )
}

const styles = StyleSheet.create({})