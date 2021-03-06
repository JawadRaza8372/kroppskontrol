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

const Forgotpassword = ({ navigation }) => {
  const [forgotPass, setforgotPass] = useState("");
  const onSubmitLogin = () => {
    if (forgotPass.length > 0) {
      navigation.navigate("HomeSrceen");
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
      {/* ImageBackground will set the image as background from the given link */}

      <View style={styles.HomeScreendiv}>
        {/* screen header is a custom component for header in app */}

        <ScreenHeader />
        <View style={styles.loginCont}>
          <View style={styles.loginForm}>
            <TextInput
              style={styles.simpleInput}
              placeholder="Skriv inn e-post adresse"
              placeholderTextColor={firstColor}
              value={forgotPass}
              onChangeText={(text) => setforgotPass(text)}
            />
          </View>
          <View style={styles.btnCont}>
            <TouchableOpacity style={styles.myButton} onPress={onSubmitLogin}>
              <Text style={styles.btnTxt}>RESET</Text>
            </TouchableOpacity>
          </View>
          {/* navigation.goBack()  will send you to previous screen whatever it was */}
          <TouchableOpacity
            style={styles.registerdiv}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.registerTxt}>Go Back ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

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
  },
  registerdiv: {
    height: h("4%"),
    width: "80%",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  forgottxt: {
    fontSize: h("2.4%"),
    color: flLightColor,
  },
});
export default Forgotpassword;
