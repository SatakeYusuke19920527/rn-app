import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Greeting = ({ test }: { test: string }) => {
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
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{test}</Text>
      <Button color={'#ccc'} onPress={showAlert} title={'show Alert'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default Greeting