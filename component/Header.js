import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header=props=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
           
        </View>
    );
};
const styles=StyleSheet.create({
   header:{
       width:'100%',
       height:60,             
       backgroundColor:'gray',       
       alignItems:'left',
       justifyContent:'center'
   },
   
   headerTitle:{
       color:'white',
       fontWeight:'bold',
       fontSize:18,
       paddingleft:10
   }

});
export default Header;