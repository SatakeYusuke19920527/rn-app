import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Greeting from './src/components/Greeting';

export default function App() {
  const showAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
      <Greeting test="Hello World" />
      <Button color={"#ccc"} onPress={showAlert} title={"show Alert"} />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30
  }
});
