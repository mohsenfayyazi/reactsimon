import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View ,Image,FlatList,Button} from 'react-native';
import Header from './component/Header';
import Main from './screens/Main';
class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      data:[]
    }
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
    
    <View>
      <Header title="Gender Neutral Dating App"/>
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
      <Text  style={styles.age}>{item.dob.age}</Text>}/>
      <View style={{ flexDirection:"row" }}>
    <View style={styles.buttonStyle}>
        <Button title="NO">Button 1</Button>
    </View>
    <View style={styles.buttonStyle2}>
        <Button title="YES" />
    </View>
</View>
     
    </View>
  )
}
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
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
    width: '50%',
    height:60,
    backgroundColor:'gray',
    fontWeight:'bold',
    fontSize:18, 
  },
  buttonStyle2: {
    width: '50%',
    height:60,
    backgroundColor:'yellow',
    fontWeight:'bold',
    fontSize:18, 
  }
});

export default App;


