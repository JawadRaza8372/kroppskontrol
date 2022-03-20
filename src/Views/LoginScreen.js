import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import React, { useState } from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { darkColor, darkYellow, firstColor, flLightColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";

const img =
  "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

const LoginScreen = ({ navigation }) => {
  const [loginForm, setloginForm] = useState({ email: "", password: "" });

  const onSubmitLogin = () => {
    if (loginForm.email.length > 0 && loginForm.password.length > 0) {
      if (loginForm.email === "admin@simple.com") {
        if (loginForm.password === "admin") {
          navigation.navigate("HomeSrceen");
        } else {
          Alert.alert("Auth-feil", "Passordet stemmer ikke", [
            {
              text: "Ok",
              onPress: () => console.log("Ok Pressed"),
              style: "ok",
            },
          ]);
        }
      } else {
        Alert.alert("Auth-feil", "Bruker finnes ikke", [
          {
            text: "Ok",
            onPress: () => console.log("Ok Pressed"),
            style: "ok",
          },
        ]);
      }
    } else {
      Alert.alert("Skjema Valideringsfeil", "Fyll ut alle feltene riktig", [
        {
          text: "Ok",
          onPress: () => console.log("Ok Pressed"),
          style: "ok",
        },
      ]);
    }
  };
  return (
    <ImageBackground source={{ uri: img }} style={styles.HomeScreendiv}>
      <View style={styles.HomeScreendiv}>
        <ScreenHeader />
        <View style={styles.loginCont}>
          <View style={styles.loginForm}>
            {/* textInput will take input in it from user   */}
            <TextInput
              style={styles.simpleInput}
              placeholder="Skriv inn e-post adresse"
              placeholderTextColor={firstColor}
              value={loginForm.email}
              onChangeText={(text) => {
                setloginForm((prevalue) => {
                  return {
                    ...prevalue,
                    email: text,
                  };
                });
              }}
            />
            <TextInput
              style={styles.simpleInput}
              placeholder="Oppgi passord"
              placeholderTextColor={firstColor}
              value={loginForm.password}
              onChangeText={(text) => {
                setloginForm((prevalue) => {
                  return {
                    ...prevalue,
                    password: text,
                  };
                });
              }}
            />
            {/* touchable Opacity is like button this button will be responsible to move from login to forgot password screen */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Forgotpassword");
              }}
            >
              <Text style={styles.forgottxt}>Glemt passord?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnCont}>
            {/* this button will responsible to move from forgot password screen to home screen */}
            <TouchableOpacity onPress={onSubmitLogin} style={styles.myButton}>
              <Text style={styles.btnTxt}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.registerTxt}>Registrer deg her</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  HomeScreendiv: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 30, 30, 0.7)",
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
    marginTop: h("15%"),
  },
  btnCont: {
    width: "100%",
    height: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    marginBottom: h("2%"),
  },
  simpleInput: {
    width: "85%",
    height: h("6%"),
    backgroundColor: flLightColor,
    marginBottom: h("2%"),
    borderRadius: h("1%"),
    paddingHorizontal: 10,
    color: darkColor,
    fontSize: h("2.2%"),
  },
  myButton: {
    height: h("6%"),
    width: w("50%"),
    backgroundColor: darkYellow,
    borderRadius: w("2%"),
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontSize: h("2.3%"),
    fontWeight: "bold",
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
