import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { darkColor, darkYellow, flLightColor } from "../AppColors";
import ScreenHeader from "../Components/ScreenHeader";
import { w, h } from "react-native-responsiveness";
import ServisComp from "../Components/ServisComp";
const WelcomScreen = () => {
  const otherString = "Profil\nAbbonnoment";
  const btnInfo = "*Gode tibud med\ngavekrot!*";
  const exrItems = [
    {
      title: "title1",
      description: "desc1",
      imglink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjJ5dtkInVRfCliO4BUQXbP4_mlvrSpmNBQ&usqp=CAU",
    },
    {
      title: "title2",
      description: "desc2",
      imglink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjJ5dtkInVRfCliO4BUQXbP4_mlvrSpmNBQ&usqp=CAU",
    },
    {
      title: "title3",
      description: "desc3",
      imglink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjJ5dtkInVRfCliO4BUQXbP4_mlvrSpmNBQ&usqp=CAU",
    },
    {
      title: "title4",
      description: "desc4",
      imglink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjJ5dtkInVRfCliO4BUQXbP4_mlvrSpmNBQ&usqp=CAU",
    },
  ];
  return (
    <View style={styles.wlcomeScreendiv}>
      <ScreenHeader />
      <View style={styles.otherContent}>
        <Text style={styles.introLoginText}>Login</Text>
        <Text style={styles.introOtherText}>{otherString}</Text>
        <View style={styles.btnAndInfoDiv}>
          <TouchableOpacity style={styles.myButton}>
            <Text style={styles.btnTxt}>Gavekrot</Text>
          </TouchableOpacity>
          <Text style={styles.btnInfText}>{btnInfo}</Text>
        </View>
        <View style={styles.optionContainer}>
          {exrItems.map((data, index) => (
            <ServisComp
              key={index}
              title={data.title}
              description={data.description}
              imglink={data.imglink}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default WelcomScreen;

const styles = StyleSheet.create({
  wlcomeScreendiv: {
    width: "100%",
    height: "100%",
    backgroundColor: darkColor,
  },
  otherContent: {
    width: "100%",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  introLoginText: {
    fontSize: h("4%"),
    fontWeight: "bold",
    color: darkYellow,
    width: "90%",
  },
  introOtherText: {
    fontSize: h("4%"),
    fontWeight: "800",
    color: flLightColor,
    width: "90%",
  },
  btnAndInfoDiv: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "center",
  },
  myButton: {
    height: h("4%"),
    width: w("30%"),
    backgroundColor: flLightColor,
    borderRadius: w("10%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontSize: h("2.3%"),
  },
  btnInfText: {
    fontSize: h("2%"),
    color: flLightColor,
    textAlign: "center",
  },
  optionContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
