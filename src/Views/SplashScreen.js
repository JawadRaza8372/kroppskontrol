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
    setTimeout(() => {
      navigation.navigate("AuthScreen");
    }, 7000);
  }, []);

  return (
    <ImageBackground source={{ uri: img }} style={styles.imgBg}>
      <View style={styles.imgBg}>
        <Text style={styles.htext}>Kroppskontrol</Text>
        <View style={styles.spaceing} />
        <ActivityIndicator size="large" color="#fff" />
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
