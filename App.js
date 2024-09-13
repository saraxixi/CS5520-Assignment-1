import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';

export default function App() {
  return (
    <View style={styles.background}>
      {/* Header */}
      <Text style={styles.header}>Welcome</Text>

      {/* Form Container */}
      <View style={styles.container}>
        <Input title="Name" shouldFocus={false}/>
        <Input title="Email" shouldFocus={false}/>
        <Input title="Phone Number" shouldFocus={false}/>
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
