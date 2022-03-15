import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { darkColor, darkYellow, firstColor, flLightColor } from "../AppColors";
import { AntDesign } from "@expo/vector-icons";

const ServisComp = ({ title, description, imglink }) => {
  return (
    <View style={styles.servsMainDiv}>
      <Text style={styles.titleTxt}>{title}</Text>
      <View style={styles.descCont}>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.imgContain}>
          <Image source={{ uri: `${imglink}` }} style={styles.imgShows} />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="arrowright" size={h("4%")} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ServisComp;

const styles = StyleSheet.create({
  servsMainDiv: {
    width: "45%",
    height: h("25%"),
    backgroundColor: darkYellow,
    borderRadius: 20,
    marginBottom: h("2%"),
    padding: 10,
    overflow: "hidden",
  },
  titleTxt: {
    fontSize: h("2.7%"),
    color: darkColor,
    width: "95%",
    alignSelf: "center",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    height: h("5%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingLeft: 10,
  },
  descCont: {
    width: "100%",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    overflow: "hidden",
  },
  description: {
    fontSize: h("1.8%"),
    color: firstColor,
    width: "50%",
  },
  imgContain: {
    width: "40%",
    height: "100%",
    borderRadius: h("5%"),
    overflow: "hidden",
  },
  imgShows: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
