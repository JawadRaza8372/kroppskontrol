import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { w, h } from "react-native-responsiveness";

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
        <Text style={styles.htext}>Kroppskontrol</Text>
        <View style={styles.spaceing} />
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
    // justifyContent: "center",
    alignItems: "center",
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
});
export default SplashScreen;
