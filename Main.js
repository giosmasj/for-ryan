import React, { useState } from 'react'
import { View, Text, Modal, Button, StyleSheet } from 'react-native'

export default function Main(props) {

  const [isHome, setIsHome] = useState(false)
  const enterApp = () => {
    setIsHome(!isHome)
  }

  return (
    <Modal
    visible={!isHome}
    >
    <View style={styles.alignment}>
      <Text style={styles.title}>So, you scared of the Rona?</Text>
      <Button title="Yes, I'm freaking out!!" onPress={() => console.log('yes')}/>
      <Button title="No, why would I be?!" onPress={() => console.log('no')}/>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  alignment: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 22,

  }
})