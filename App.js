import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View ,Image,FlatList,Button,NativeModules } from 'react-native';
import Header from './component/Header';
import Main from './screens/Main';
import { Actions } from 'react-native';



  

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      lastRefresh: Date(Date.now()).toString(), 
      data:[]
    }
    this.refreshScreen = this.refreshScreen.bind(this)
  }
  refreshScreen() {
    NativeModules.DevSettings.reload();
    this.setState({ lastRefresh: Date(Date.now()).toString() })
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

render() {
  1
  
  return (
    
    <View style={{alignItems:'center',paddingBottom: 50}}>
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
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
        </View>
        <View style={styles.buttonStyle} >
        <Button 
        onPress={this.refreshScreen} 
        title="YES"
        color="orange"
        
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


