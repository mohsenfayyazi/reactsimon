import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header=props=>{

    
    const counter=localStorage.getItem('myData');
    var color=null;
    if (counter>=5) color="styles.CounterOrange";
    return(
        
        <View style={styles.header}>
           
            <Text style={styles.header}>{props.title}</Text>
            
            <View style={{
                marginTop: 8,
                paddingVertical: 4,
                borderRadius: 4,
                backgroundColor:counter>=5 ? 'orange' : 'white',
                color: "black",
                textAlign: "center",
                fontSize: '14px',    
                width:'25px',height:'25px',
                marginRight:16


            }}>
           {counter}
            </View>
        </View>
        
    );
};
const styles=StyleSheet.create({
   header:{
       width:500,
       height:60,             
       backgroundColor:'gray',       
       flexDirection: 'row',
       justifyContent:'center',
       color:'black',
       fontWeight:'bold',      
       fontSize:'18px',
       textAlignVertical:'center',
       marginLeft:16,
       
      
   },
   
   
  
});
export default Header;