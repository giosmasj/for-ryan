import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import Main from './Main.js'

export default function App() {

  const [isHome, setIsHome] = useState(false)
  const enterApp = () => {
    setIsHome(!isHome)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.image}
        >
        <Text style={styles.title}>Rona Rationalizer</Text>
        <Button title="Enter" onPress={() => setIsHome(!isHome)}/>
        <Main visible={isHome}/>
      </ImageBackground>
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
    height: '100%'
  },
  title: {
    fontSize: 42,
    textAlign: "center",
    marginBottom: 400
  }
});
