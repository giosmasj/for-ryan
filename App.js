import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Modal } from 'react-native';
import Main from './Main.js'
import Yes from './Yes.js';
import No from './No.js';

export default function App() {

  const [isYes, setIsYes] = useState(false)
  const enterAppYes = () => {
    setIsYes(!isYes)
  }
  const [isNo, setIsNo] = useState(false)
  const enterAppNo = () => {
    setIsNo(!isNo)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}
        >
        <Text style={styles.title}>Rona Rationalizer</Text>
        <Text style={styles.question}>So, you scared of the Rona?</Text>
      <Button title="Yes, I'm freaking out!!" onPress={() => {setIsYes(true)}}/>
      <Button style={styles.no} title="No, why would I be?!" onPress={() => enterAppNo()}/>
      </ImageBackground>
    <Modal visible={isYes}>
      <Yes/>
    </Modal>
    <Modal visible={isNo}>
      <No/>
    </Modal>
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
  image: {
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 42,
    textAlign: "center",
    // marginTop: -300
  },
  question: {
    fontSize: 22,
    textAlign: "center",
    marginTop: 7,
    marginBottom: 330
  },
  yes: {
    fontSize: 50
  },
  no: {

  }
});
