import React from "react";

import {Text,View,StyleSheet} from "react-native"

const App=()=>{
  const users=[
    {
      id:1,
      name:"John"
    },
    {
      id:2,
      name:"Peter"
    },
    {
      id:3,
      name:"Smith"
    },
    {
      id:4,
      name:"Dhoni"
    },
    
    {
      id:10,
      name:"Bruce"
    },
    {
      id:12,
      name:"Ekansh"
    },
    {
      id:13,
      name:"Harvansh"
    },
    {
      id:14,
      name:"swami"
    },
    {
      id:15,
      name:"Dhruv"
    },
    {
      id:16,
      name:"Bruce"
    },
    {
      id:17,
      name:"manish"
    },
    {
      id:18,
      name:"lokesh"
    },
    {
      id:19,
      name:"aaditya"
    },
  ]

  return(
    <View>
      <Text style={{fontSize:31}}> Dynamic GRID</Text>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
        {
          users.map(item =><Text style={styles.item}>{item.name}</Text>)
        }
        
        </View>
        </View>
   
  )
}


const styles=StyleSheet.create({
  item:{
    fontSize:25,
    backgroundColor:'blue',
    color:'#fff',
    margin:5,
    padding:5,
    width:120,
    height:120,
    textAlignVertical: 'center',
    textAlign: 'center',
  }

})

export default App;