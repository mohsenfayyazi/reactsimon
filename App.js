import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image,FlatList,Button,NativeModules } from 'react-native';
import Header from './component/Header';
import Moment from 'moment';
import * as Font from 'expo-font';






class App extends React.Component{
  constructor(props)
  {
    
    super(props);
    this.state = {firstLaunch: null};
    this.state={
      data:[],
      counter:Number(sessionStorage.getItem('myData'))  ,
      isLoading: true
      
    }
  }

componentDidMount()
{
  this.setState({isLoading: false})
  this.apiCall();
  this.setState({firstLaunch: true});
}


async apiCall()
{
  let resp=await fetch('https://randomuser.me/api/');
  let respJson=await resp.json()  
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

render() {
  Moment.locale('en');
  let counter = this.state.counter;
  const LoadFont=()=>{
    Font.loadAsync({
       GoogleFont:require('./assets/font/Roboto-Regular.ttf')
    })
  }

  const pc=sessionStorage.setItem('myData', counter);
  var check=null,checkbutton=null;
  if (counter>=5 || this.state.isLoading ) check="true";
  if (this.state.isLoading ) checkbutton="true";
  
  return (
    this.state.isLoading ? <View style={{alignItems:'center'}}>
      <Header title="Gender Neutral Dating App" />
          Loading...
      </View> : 
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
      <Text  style={styles.age}>{Moment().format('YYYY')-Moment(item.dob.date).format('YYYY')} </Text>
 
      }/>
      
      
      <View style={styles.container}>
        
        <View style={styles.buttonStyle} >
        <Button 
        title="NO"
        color="gray"
        onPress={this.refreshPageNoCounter}
        disabled={checkbutton}
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
    fontFamily:'GoogleFont'
  },
  age: {
    fontSize: 14,
    justifyContent:'center'
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