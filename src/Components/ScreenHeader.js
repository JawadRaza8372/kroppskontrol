import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { darkColor, flLightColor, lightColor } from "../AppColors";
const ScreenHeader = () => {
  return (
    <View style={styles.headerDiv}>
      {/* <Text style={styles.logoText}>Kroppskontrol</Text> */}
      <Image
        source={require("../../assets/onlyBlack.png")}
        style={styles.logoSet}
      />
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  headerDiv: {
    width: "100%",
    height: h("7%"),
    backgroundColor: darkColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: h("3%"),
    color: flLightColor,
    textTransform: "capitalize",
  },
  logoSet: {
    width: "100%",
    height: "90%",
    resizeMode: "center",
    tintColor: flLightColor,
  },
});
