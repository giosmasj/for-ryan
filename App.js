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
        <Button title="Enter" onPress={() => setIsHome(!isHome)}/>
      </ImageBackground>
        <Main />
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
    height: '100%'
  },
  title: {
    fontSize: 42,
    textAlign: "center",
    marginBottom: 400
  }
});
