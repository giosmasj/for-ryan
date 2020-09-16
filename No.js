import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function No(props) {

  const url = `https://www.covidtracking.com/api/us/`

  const [total, setTotal] = useState("")
  const [death, setDeath] = useState("")
  const [everything, setEverything] = useState("")

  const handleFetch = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setTotal(json.positive)
        setDeath(json.death)
        setEverything(json.states)
        // console.log(json)
      })
  }
  handleFetch(url)
  // console.log(everything)
  return (
    <View>
      <Text style={styles.main}>NO {everything} </Text>
      <Button title="Back" onPress={() => props.isNo()}/>
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