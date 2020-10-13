import React from 'react';
import { SafeAreaView, ScrollView,Text, TouchableOpacity,StyleSheet, Dimensions } from 'react-native';
import {NewCard} from './components'



const Main = () => {
    return(
    <SafeAreaView style ={{flex:1,backgroundColor:'black'}}>
        <NewCard/>
       
        

    </SafeAreaView>
    )
}

export default Main;

const styles = StyleSheet.create({
    Container:{

    },
    
})