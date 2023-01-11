import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Linking, TextInput, TouchableOpacity, Button,Share} from 'react-native';



export default function App() {
  const[num,setNum]=useState("9786241276");
  const[whmsg,setWhmsg]=useState(
    "Please Click On a Link : https://en.wikipedia.org/wiki/Shivaji"
  )

  const pressHandel = (()=>{
    let url = 'whatsapp://send?text='+whmsg+'&phone=91'+num;
    Linking.openURL(url)
    .then((data)=>{
      console.log("whatsapp opened")
    }).catch((err)=>{
      alert("make sure whatsapp installed")
    })
  })

  {/*const pressHandele = (()=>{
    const shareoptions={
      title:"Share Via",
      message:"Hello",
      url:"https://en.wikipedia.org/wiki/Shivaji",
      social: "whatsapp",
      whatsAppNumber:"919967589255",
      filename:"test"
    }

    Share.shareSingle(shareoptions)
    .then((res)=>{console.log(res)})
    .catch((err)=>{err && console.log(err)})
    
    
  })*/}


  return (
    <View style={styles.container}>
     <Text style={{fontWeight:"600",fontSize:18,marginBottom:"5%"}}> To send Massege to Mobile Number</Text>
     
      <TouchableOpacity onPress={pressHandel} style={styles.touch}>
        <Text style={{color:"white"}}>Send Massege</Text>
      </TouchableOpacity>

     {/* <TouchableOpacity onPress={pressHandele} style={styles.touch}>
        <Text style={{color:"white"}}>Send </Text>
  </TouchableOpacity>*/}
  
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
  input:{
    width:"80%",
    height:60,
    borderWidth:1,
    padding:12
  },
  touch:{
    marginTop:"8%",
    width:"80%",
    height:50,
    padding:12,
    alignItems:"center",
    backgroundColor:"green"
  }
});
