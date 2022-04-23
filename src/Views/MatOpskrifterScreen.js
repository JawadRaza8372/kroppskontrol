import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { darkColor, darkYellow } from "../AppColors";
import { w, h } from "react-native-responsiveness";
import MatOpsIremComp from "../Components/MatOpsIremComp";
import { useSelector } from "react-redux";
// food recipes
const MatOpskrifterScreen = () => {
  const { isAuth } = useSelector((state) => state.auth);

  const myString = "Mat Oppskrifter";
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
  if (isAuth) {
    return (
      <View style={styles.HomeScreendiv}>
        <ScreenHeader />
        <View style={styles.imageContainer}>
          {/* this view will contain the image init  */}
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjJ5dtkInVRfCliO4BUQXbP4_mlvrSpmNBQ&usqp=CAU",
            }}
            style={styles.screenImge}
          />
          <View style={styles.fillback}>
            {/* this view will place an overlay of a color with low opacity and the below text will be responsible for showing the text on that overlay */}
            <Text style={styles.filltxt}>{myString}</Text>
          </View>
        </View>
        {/* in map function we want to repeat this component but with differant content means same look but differnt data so we provide data in aaray and with map we spcified that which attribute should have which array's object data */}
        {/* navigation.navigate("screen name") will be responsible to go from current screen to next screen whose name you will mantion */}

        <ScrollView contentContainerStyle={styles.contentDiv}>
          {itmsArr.map((dat, index) => (
            <MatOpsIremComp key={index} title={dat.title} subtitle={dat.desc} />
          ))}
        </ScrollView>
      </View>
    );
  } else {
    navigation.replace("LoginScreen");
    return null;
  }
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
    backgroundColor: "rgba(0,0,0,0.7)",
    position: "absolute",
    top: 0,
  },
  filltxt: {
    fontSize: h("5%"),
    color: darkYellow,
    textAlign: "center",
  },
});
