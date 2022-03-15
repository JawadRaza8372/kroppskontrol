import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { darkColor, flLightColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";
const MatOpsIremComp = ({ title, subtitle }) => {
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.headingText}>{title}</Text>
      <Text style={styles.subtitleTxt}>{subtitle}</Text>
      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.myButton}>
          <Text style={styles.btnTxt}>Vis mer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MatOpsIremComp;

const styles = StyleSheet.create({
  mainDiv: {
    width: w("87%"),
    height: h("25%"),
    backgroundColor: darkColor,
    marginBottom: h("1%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignSelf: "center",
    borderRadius: h("5%"),
    overflow: "hidden",
  },
  headingText: {
    fontSize: h("3%"),
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
    width: "95%",
    marginRight: w("6%"),
    display: "flex",
    alignItems: "flex-end",
  },
  descrptText: {
    fontSize: h("2%"),
    color: flLightColor,
    textAlign: "center",
  },
  subtitleTxt: {
    fontSize: h("1.8%"),
    color: flLightColor,
    textAlign: "center",
    marginBottom: h("1%"),
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
});