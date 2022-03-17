import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { w, h } from "react-native-responsiveness";
import { flLightColor } from "../AppColors";
const img =
  "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // after 7 seconds screen will change itself due to this function
    setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 7000);
  }, []);

  return (
    <ImageBackground source={{ uri: img }} style={styles.imgBg}>
      {/* ImageBackground will set the image as background from the given link */}
      {/* View is just like div */}
      <View style={styles.imgBg}>
        <View style={styles.imgConta}>
          <Image
            source={require("../../assets/onlyBlack.png")}
            style={styles.logoSet}
          />
        </View>

        {/* <View style={styles.spaceing} /> */}
        {/* loading component Start */}
        <ActivityIndicator size="large" color="#fff" />
        {/* loading component End */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0, 30, 30, 0.7)",
  },
  htext: {
    color: "#fff",
    fontSize: h("4%"),
    marginTop: h("10%"),
  },
  spaceing: {
    marginTop: h("60%"),
  },
  imgConta: {
    width: "100%",
    height: h("10%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoSet: {
    width: "90%",
    height: "90%",
    resizeMode: "center",
    tintColor: flLightColor,
  },
});
export default SplashScreen;
