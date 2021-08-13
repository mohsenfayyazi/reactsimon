import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View ,Image,FlatList,Button,NativeModules } from 'react-native';
import Header from './component/Header';
import Main from './screens/Main';
import { Actions } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage'



class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      data:[],
      counter:Number(localStorage.getItem('myData'))  ,
      
    }
  }
  

  _onPressButton() {
    alert('You tapped the button!')
  }
componentDidMount()
{
  this.apiCall();
}


async apiCall()
{
  let resp=await fetch('https://randomuser.me/api/');
  let respJson=await resp.json()
  console.log(respJson)
  this.setState({data:respJson.results})
  
}
refreshPage= () => {
  this.setState({
    counter: this.state.counter + 1,
  })
  window.location.reload(false);
  
}
refreshPageNoCounter= () => {
  this.setState({
    
  })
  window.location.reload(false);
  
}
onIncrement = () => {
  this.setState({
    counter: this.state.counter + 1,
  })
};
getValueFunction = () => {
  // Function to get the value from AsyncStorage
  AsyncStorage.getItem('cnt').then(
    (value) =>
      // AsyncStorage returns a promise
      // Adding a callback to get the value
      setGetValue(value),
    // Setting the value in Text
  );
};
render() {
  const counter = this.state.counter;
  //AsyncStorage.setItem('cnt', counter);
  const pc=localStorage.setItem('myData', counter);
  var check=null;
  if (counter>=5) check="true";

  return (
    
    <View style={{alignItems:'center'}}>
      <Header title="Gender Neutral Dating App" />
      <FlatList 
      data={this.state.data}      
      renderItem={({item})=>
      <Image style={styles.logo} source={item.picture.large} />} />
      <FlatList
      data={this.state.data}
      
      renderItem={({item})=>
      <Text style={styles.text}>{item.name.first}   {item.name.last}</Text>} />
      <FlatList
      data={this.state.data}      
      renderItem={({item})=>
      <Text  style={styles.age}>{item.dob.age}</Text>
      }/>
      
      <View style={styles.container}>
        
        <View style={styles.buttonStyle} >
        <Button 
        title="NO"
        color="gray"
        onPress={this.refreshPageNoCounter}
      />
        </View>
        <View style={styles.buttonStyle} >
        <Button 
        onPress={this.refreshPage}
          
        title="YES"
        color="orange"
        disabled={check}
      />
      
        </View>
        
      </View>
      
    </View>
    
  )
}

}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems:'center',
    width:'500',
    height:'500',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 32,
    textTransform: 'uppercase',
  },
  age: {
    fontSize: 14
  },
  logo: {
    marginTop:20,
    width: 128,
    height: 128,
    borderRadius: 60,
  },
  
  buttonStyle: {
    width: 250,
    height: 40
  },
  buttonStyle2: {
    width: '250',
    height:60,
    backgroundColor:'yellow',
    fontWeight:'bold',
    fontSize:18, 
  }
});



export default App;


