import React from 'react';
import { Image, ScrollView,Text, View,StyleSheet, Dimensions, Linking, TouchableHighlight, TouchableOpacity } from 'react-native';


const footballer_info = [
    {
      id: 0,
      name: 'Alex De Souza',
      img_location:require('../assets/alex.png'),
      url : 'https://de.wikipedia.org/wiki/Alexsandro_de_Souza'
    },
    {
        id:1 ,
        name: 'Paulo Dybala',
        img_location:require('../assets/Dybala.png'),
        url : 'https://de.wikipedia.org/wiki/Paulo_Dybala'
    },
    {
        id:3 ,
        name: 'Kevin De Bruyne',
        img_location:require('../assets/kevin.png'),
        url : 'https://de.wikipedia.org/wiki/Kevin_De_Bruyne'
    },
    {
        id:4 ,
        name: 'Lionel Messi',
        img_location:require('../assets/messi.png'),
        url : 'https://de.wikipedia.org/wiki/Lionel_Messi'
    },
    {
        id:5 ,
        name: 'Neymar',
        img_location:require('../assets/neymar.png'),
        url : 'https://de.wikipedia.org/wiki/Neymar'
    },
    {
        id:6 ,
        name: 'Paul Pogba',
        img_location:require('../assets/pogba.png'),
        url : 'https://de.wikipedia.org/wiki/Paul_Pogba'
    },
    {
        id:7 ,
        name: 'Sergio Ramos',
        img_location:require('../assets/ramos.png'),
        url : 'https://de.wikipedia.org/wiki/Sergio_Ramos'
    },
    {
        id:8 ,
        name: 'Cristiano Ronaldo',
        img_location:require('../assets/ronaldo.png'),
        url : 'https://de.wikipedia.org/wiki/Cristiano_Ronaldo'
    },
    {
        id:9 ,
        name: 'Mohamed Salah',
        img_location:require('../assets/salah.png'),
        url : 'https://de.wikipedia.org/wiki/Mohamed_Salah',
    },
  ];





const NewCard = () =>  {
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex:1}}>
            {
                footballer_info.map(footballer => {
                    return(
                        <View>
                        <TouchableHighlight style={{flex:1}} onPress={() => {
                            Linking.openURL(footballer.url)
                        }}>
                            <Image
                            
                            source={footballer.img_location}
                            style ={styles.images}
                            
                            />
                        </TouchableHighlight>
                        <Text style={styles.text}>{footballer.name}</Text>
                        </View>

                    )
                })
            }
            
        </ScrollView>
    )
}
// onPress={() =>
//     Linking.openURL}
export {NewCard};


const styles = StyleSheet.create({
    container:{
        

    },
    images:{
        width : Dimensions.get('window').width * 0.7,
        height: Dimensions.get('screen').height * 0.6,
        resizeMode:'contain',
        marginHorizontal:100,
        position:'relative'
        
    },
    text:{
        position:'absolute',
        color:'azure',
        left:50,
        fontSize:15,
    },
    

})
