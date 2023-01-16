import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import Share from "react-native-share";

function App() {

  const sharelink = (()=>{
    const options={
      url:"https://simple.wikipedia.org/wiki/Main_Page",
      message:"Hello"
    }
    Share.open(options);
  })
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Button mode='contained' onPress={sharelink}>Share Me</Button>
    </View>
  )
}

export default App