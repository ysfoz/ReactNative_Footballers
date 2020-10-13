import React from 'react';
import { SafeAreaView, ScrollView,Text, TouchableOpacity,StyleSheet, Dimensions } from 'react-native';
import {NewCard} from './components/NewCard'


const Main = () => {
    return(
        <SafeAreaView style ={{flex:1,backgroundColor:'black'}}>
           <NewCard/>

           <TouchableOpacity style = {styles.button}>
                <Text style ={styles.text}>Goller</Text>
          </TouchableOpacity> 
        </SafeAreaView>
    )
}

export default Main;

const styles = StyleSheet.create({
    Container:{

    },
    button:{
     backgroundColor:'green',
     padding:10,
     width : Dimensions.get('screen').width * 0.6,
     alignItems:'center',
     

    },
    text:{
        fontSize:20,
        fontWeight:'bold'

    }
})