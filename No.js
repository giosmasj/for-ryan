import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet } from 'react-native'

export default function Yes(props) {

  return (
    <View>
      <Text style={styles.main}>NO</Text>
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