import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Yes(props) {

  return (
    <View>
      <Text style={styles.main}>YES</Text>
      <Button title="Back" onPress={() => props.isYes()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 200
  },
  main: {
    color: "red",
    fontSize: 90
  }
})