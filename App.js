import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.background}>
      {/* Header */}
      <Text style={styles.header}>WELCOME</Text>

      {/* Form Container */}
      <View style={styles.container}>
        <Text style={styles.container}></Text>
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
});
