import React from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Linking,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const footballer_info = [
  {
    id: 0,
    name: "Alex De Souza",
    img_location: require("../assets/alex.png"),
    url: "https://de.wikipedia.org/wiki/Alexsandro_de_Souza",
    youtube: "https://www.youtube.com/watch?v=jmWqVT004r4",
  },
  {
    id: 1,
    name: "Paulo Dybala",
    img_location: require("../assets/Dybala.png"),
    url: "https://de.wikipedia.org/wiki/Paulo_Dybala",
    youtube: "https://www.youtube.com/watch?v=Vi53_jiRIks",
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    img_location: require("../assets/kevin.png"),
    url: "https://de.wikipedia.org/wiki/Kevin_De_Bruyne",
    youtube: "https://www.youtube.com/watch?v=qZ-v78q5d7U",
  },
  {
    id: 4,
    name: "Lionel Messi",
    img_location: require("../assets/messi.png"),
    url: "https://de.wikipedia.org/wiki/Lionel_Messi",
    youtube: "https://www.youtube.com/watch?v=JLVBc_J43V8",
  },
  {
    id: 5,
    name: "Neymar",
    img_location: require("../assets/neymar.png"),
    url: "https://de.wikipedia.org/wiki/Neymar",
    youtube: "https://www.youtube.com/watch?v=cJG9_UKJfj0",
  },
  {
    id: 6,
    name: "Paul Pogba",
    img_location: require("../assets/pogba.png"),
    url: "https://de.wikipedia.org/wiki/Paul_Pogba",
    youtube: "https://www.youtube.com/watch?v=VyVk1xmZMcE",
  },
  {
    id: 7,
    name: "Sergio Ramos",
    img_location: require("../assets/ramos.png"),
    url: "https://de.wikipedia.org/wiki/Sergio_Ramos",
    youtube: "https://www.youtube.com/watch?v=cbkL7tU4bw4",
  },
  {
    id: 8,
    name: "Cristiano Ronaldo",
    img_location: require("../assets/ronaldo.png"),
    url: "https://de.wikipedia.org/wiki/Cristiano_Ronaldo",
    youtube: "https://www.youtube.com/watch?v=dbp91G9EA8U",
  },
  {
    id: 9,
    name: "Mohamed Salah",
    img_location: require("../assets/salah.png"),
    url: "https://de.wikipedia.org/wiki/Mohamed_Salah",
    youtube: "https://www.youtube.com/watch?v=6sfP9bfNT98",
  },
];

const NewCard = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {footballer_info.map((footballer) => {
          return (
            <View>
              <TouchableHighlight
                onPress={() => {
                  Linking.openURL(footballer.url);
                }}
              >
                <Image source={footballer.img_location} style={styles.images} />
              </TouchableHighlight>
              <Text style={styles.text}>{footballer.name}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  Linking.openURL(footballer.youtube);
                }}
              >
                <Text style={styles.text_button}>GOALS</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export { NewCard };

const styles = StyleSheet.create({
  container: {},
  images: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("screen").height * 0.6,
    resizeMode: "contain",
    marginHorizontal: 100,
    position: "relative",
  },
  text: {
    position: "absolute",
    color: "azure",
    left: 50,
    fontSize: 15,
  },
  button: {
    backgroundColor: "rgba(111,222,333,0.1)",
    width: Dimensions.get("screen").width * 0.65,
    padding: 10,
    borderRadius: 15,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 80,
    
  },
  text_button: {
    fontSize: 25,
    fontWeight: "bold",
    color: "azure",
  },
});
