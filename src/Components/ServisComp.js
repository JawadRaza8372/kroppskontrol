import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { darkColor, darkYellow, firstColor, flLightColor } from "../AppColors";
import { AntDesign } from "@expo/vector-icons";

const ServisComp = ({
  title,
  description,
  imglink,
  bg,
  textcolor,
  onPress,
}) => {
  //   title,
  // description,
  // imglink,
  // bg,
  // textcolor,
  // onPress, these are all props cooming from the screen where it is called if it is called in map function then array's data will be in these attributes
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.servsMainDiv, { backgroundColor: bg }]}
    >
      <Text style={[styles.titleTxt, { color: textcolor }]}>{title}</Text>
      <View style={styles.descCont}>
        {/* this view will show text and image side by side */}
        <Text style={styles.description}>{description}</Text>
        <View style={styles.imgContain}>
          <Image source={{ uri: `${imglink}` }} style={styles.imgShows} />
        </View>
      </View>
      <View style={styles.button}>
        <AntDesign name="arrowright" size={h("4%")} color="#062C30" />
      </View>
    </TouchableOpacity>
  );
};

export default ServisComp;

const styles = StyleSheet.create({
  servsMainDiv: {
    width: "45%",
    height: h("25%"),
    backgroundColor: darkYellow,
    borderRadius: h("1%"),
    marginBottom: h("2%"),
    padding: 10,
    overflow: "hidden",
  },
  titleTxt: {
    fontSize: h("2.0%"),
    color: darkColor,
    width: "95%",
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: h("1%"),
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
    // overflow: "hidden",
  },
  description: {
    fontSize: h("1.8%"),
    color: "#062C30",
    width: "50%",
  },
  imgContain: {
    width: "40%",
    height: "100%",
    borderRadius: h("1%"),
    overflow: "hidden",
    resizeMode: "contain",
  },
  imgShows: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
