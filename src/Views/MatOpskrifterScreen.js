import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { darkColor, darkYellow } from "../AppColors";
import { w, h } from "react-native-responsiveness";
import MatOpsIremComp from "../Components/MatOpsIremComp";
const MatOpskrifterScreen = () => {
  const myString = "Mat\nOppskrifter";
  const itmsArr = [
    {
      title: "Balansert kost",
      desc: "Cardio grupper:\nCardio step\nBodyshape\nTransformer",
    },
    {
      title: "Keto diet",
      desc: "Cardio grupper:\nCardio step\nBodyshape\nTransformer",
    },
    {
      title: "Lav karbo diet",
      desc: "Cardio grupper:\nCardio step\nBodyshape\nTransformer",
    },
    {
      title: "Oppskrifter",
      desc: "Cardio grupper:\nCardio step\nBodyshape\nTransformer",
    },
    {
      title: "Trening og mat",
      desc: "Cardio grupper:\nCardio step\nBodyshape\nTransformer",
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
          <Text style={styles.filltxt}>{myString}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentDiv}>
        {itmsArr.map((dat, index) => (
          <MatOpsIremComp key={index} title={dat.title} subtitle={dat.desc} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MatOpskrifterScreen;

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
    textAlign: "center",
  },
});
