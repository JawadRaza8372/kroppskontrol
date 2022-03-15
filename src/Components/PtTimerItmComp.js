import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { darkColor, flLightColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";
const PtTimerItmComp = ({ title, subtitle, desc }) => {
  title = title ? title : " ";
  subtitle = subtitle ? subtitle : " ";
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.headingText}>{title}</Text>
      <View style={styles.textARg}>
        <Text style={styles.subtitleTxt}>{subtitle}</Text>
        <Text style={styles.descrptText}>{desc}</Text>
      </View>

      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.myButton}>
          <Text style={styles.btnTxt}>Vis mer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PtTimerItmComp;

const styles = StyleSheet.create({
  mainDiv: {
    width: w("100%"),
    height: h("25%"),
    backgroundColor: darkColor,
    marginBottom: h("1%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  headingText: {
    fontSize: h("2.5%"),
    color: flLightColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  textARg: {
    width: "94%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    marginLeft: w("6%"),
  },
  btnCont: {
    width: "91%",
    marginRight: w("6%"),
    display: "flex",
    alignItems: "flex-end",
  },
  descrptText: {
    fontSize: h("1.9%"),
    color: flLightColor,
  },
  subtitleTxt: {
    fontSize: h("2.1%"),
    color: flLightColor,
    textAlign: "center",
  },
  myButton: {
    height: h("5%"),
    width: w("30%"),
    backgroundColor: flLightColor,
    borderRadius: w("2%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontSize: h("2.3%"),
  },
});
