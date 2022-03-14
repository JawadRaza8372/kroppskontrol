import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { darkColor, darkYellow } from "../AppColors";
import { w, h } from "react-native-responsiveness";
import HomeItmComp from "../Components/HomeItmComp";
import PtTimerItmComp from "../Components/PtTimerItmComp";
const PtTimerScreen = () => {
  const newArry = [
    {
      title: "PT Pakke 1",
      desc: "3 deger med person lig \ntrener",
    },
    {
      title: "PT Pakke 2",
      desc: "3 deger med person lig \ntrener",
    },
    {
      title: "PT Pakke 3",
      desc: "3 deger med person lig \ntrener",
    },
    {
      title: "PT Pakke 4",
      desc: "3 deger med person lig \ntrener",
    },
    {
      title: "PT Pakke 5",
      desc: "3 deger med person lig \ntrener",
    },
    {
      title: "PT Pakke 6",
      desc: "3 deger med person lig \ntrener",
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
        <View style={styles.fillback}>
          <Text style={styles.filltxt}>PT</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentDiv}>
        {newArry.map((dat, index) => (
          <PtTimerItmComp
            key={index}
            title={dat.title}
            subtitle={dat.title}
            desc={dat.desc}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PtTimerScreen;

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
    position: "relative",
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
  fillback: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "absolute",
    top: 0,
  },
  filltxt: {
    fontSize: h("7%"),
    color: darkYellow,
  },
});
