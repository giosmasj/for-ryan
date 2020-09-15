import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Modal } from 'react-native';
import Main from './Main.js'

export default function App() {

  const [isHome, setIsHome] = useState(true)
  const enterApp = () => {
    setIsHome(!isHome)
  }

  return (
    <Modal visible={isHome}>
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}
        >
        <Text style={styles.title}>Rona Rationalizer</Text>
        <Text style={styles.question}>So, you scared of the Rona?</Text>
        <View style={styles.yes}>
      <Button title="Yes, I'm freaking out!!" onPress={() => setIsHome(!isHome)}/>
      </View>
      <Button style={styles.no} title="No, why would I be?!" onPress={() => setIsHome(!isHome)}/>
      </ImageBackground>
      {/* <Main /> */}
    </View>
    </Modal>
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
