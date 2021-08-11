import React from 'react';
import {View, Text, StyleSheet, Button,Image} from 'react-native';


const Main=props=>{
    return(
        <View style={styles.screen}>
           <Text>Main</Text>
           <View>
               
               <Button title="Yes" />
               <Button title="No" />

           </View>
        </View>
    );
};
const styles=StyleSheet.create({
   screen:{
       flex:1,
       padding:10,             
       justifyContent:'center'
   }

});
export default Main;