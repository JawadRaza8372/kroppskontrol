import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { darkColor, darkYellow, firstColor, flLightColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";
const AuthScreen = () => {
  return (
    <View style={styles.HomeScreendiv}>
      <ScreenHeader />
      <View style={styles.loginCont}>
        <View style={styles.loginForm}>
          <TextInput
            style={styles.simpleInput}
            placeholder="Enter Email address"
            placeholderTextColor={firstColor}
          />
          <TextInput
            style={styles.simpleInput}
            placeholder="Enter Password"
            placeholderTextColor={firstColor}
          />
          <Text style={styles.registerTxt}>Registrer deg her</Text>
          <Text style={styles.forgottxt}>Glemt passord?</Text>
        </View>
        <View style={styles.btnCont}>
          <TouchableOpacity style={styles.myButton}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  HomeScreendiv: {
    width: "100%",
    height: "100%",
    backgroundColor: darkColor,
  },
  loginCont: {
    width: "100%",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  loginForm: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  btnCont: {
    width: "100%",
    height: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  simpleInput: {
    width: "85%",
    height: h("6%"),
    backgroundColor: flLightColor,
    marginBottom: h("2%"),
    borderRadius: h("50%"),
    paddingHorizontal: 10,
    color: darkColor,
    fontSize: h("2.2%"),
  },
  myButton: {
    height: h("6%"),
    width: w("50%"),
    backgroundColor: darkYellow,
    borderRadius: w("10%"),
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontSize: h("3%"),
  },
  registerTxt: {
    fontSize: h("2.4%"),
    color: flLightColor,
    marginBottom: h("2%"),
  },
  forgottxt: {
    fontSize: h("2.4%"),
    color: flLightColor,
  },
});
