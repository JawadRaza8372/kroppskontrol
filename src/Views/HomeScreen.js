import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { darkYellow } from "../AppColors";
import { w, h } from "react-native-responsiveness";
import HomeItmComp from "../Components/HomeItmComp";
const HomeScreen = () => {
  const newArry = [
    {
      title: "PT Timer",
      desc: "Ingen ting er som a trene mod andre,\nom du har lyst till a prove en time.\nMeld dog pa na ",
      imgstatus: false,
    },
    {
      title: "Gruppetimer",
      imgstatus: false,
      desc: "Beste motivasjonen or a se andre hate \nmer en deg. Er du et rasshol \nsom lever av tarer sa meld dog pa \nma ",
    },
    {
      title: "Mat Oppskrifter",
      desc: "Fem om dawn er bra for \nkroppen, sills 5 om dagen!",
      imgstatus: true,
    },
    {
      title: "Verv en ven",
      desc: "verv en venn 0g fa \nen gratis time",
      imgstatus: false,
    },
  ];
  return (
    <View style={styles.HomeScreendiv}>
      <ScreenHeader />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjJ5dtkInVRfCliO4BUQXbP4_mlvrSpmNBQ&usqp=CAU",
          }}
          style={styles.screenImge}
        />
      </View>
      <ScrollView contentContainerStyle={styles.contentDiv}>
        {newArry.map((dat, index) => (
          <HomeItmComp
            key={index}
            title={dat.title}
            description={dat.desc}
            imglink={dat.imgstatus}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HomeScreendiv: {
    width: "100%",
    height: "100%",
    backgroundColor: darkYellow,
  },
  imageContainer: {
    width: "100%",
    height: h("30%"),
    marginBottom: h("2%"),
  },
  screenImge: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentDiv: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
  },
});
