import React from 'react'
import { View, Text, Modal, Button, StyleSheet } from 'react-native'

export default function Main(props) {
  return (
    <Modal
    visible={props.enter}
    >
    <View style={styles.alignment}>
      <Text style={styles.title}>So, you scared of the Rona?</Text>
      <Button title="Yes, I'm freaking out!!" />
      <Button title="No, why would I be?!" />
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