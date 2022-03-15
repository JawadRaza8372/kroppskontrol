import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { firstColor, darkYellow, flLightColor } from "../AppColors";
import ScreenHeader from "../Components/ScreenHeader";
import { w, h } from "react-native-responsiveness";
import ServisComp from "../Components/ServisComp";

const WelcomScreen = ({ navigation }) => {
  const otherString = "Akutt og forebyggende helsetiltak gjennom hele livet";
  const btnInfo = "Gavekort";
  const exrItems = [
    {
      // title: "Fysikalsk behandling",
      // description: "osteopat fysioterapeut og kiropraktor",
      title: "MatOpskrifterScreen",
      description: "Ernæringsfysiologer og måltidsplaner",
      bg: "#56BBF1",
      txt: "#062C30",
      screen: "MatOpskrifterScreen",
      imglink:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
    },

    {
      title: "Personlig Trening",
      description: "En-til-en trening eller PT duo",
      bg: "#EBD671",
      txt: "#062C30",
      screen: "PtTimerScreen",
      imglink:
        "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "Sosial trening",
      description: "Tren i felleskap og bli kjent med mye mennesker",
      bg: "#FC4F4F",
      txt: "#062C30",
      screen: "GrupiTimerScreen",
      imglink:
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Mukelbehandling",
      description: "en tilneaming for a losne i stramme muskler",
      bg: "#FFAB76",
      txt: "#062C30",
      screen: "PtTimerScreen",
      imglink:
        "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <ImageBackground
      source={require("../../assets/bg2.jpg")}
      style={styles.wlcomeScreendiv}
    >
      <View style={styles.wlcomeScreendiv}>
        <View style={styles.headerDiv}>
          <Text style={styles.logoText}>Kroppskontrol</Text>
        </View>

        <View style={styles.otherContent}>
          <Text style={styles.introLoginText}>Kroppskontrol, helt enkelt</Text>
          <Text style={styles.introOtherText}>{otherString}</Text>
          <View style={styles.btnAndInfoDiv}>
            <TouchableOpacity style={styles.myButton}>
              <Text style={styles.btnTxt}>Bestill time</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.myButton2}>
              <Text style={styles.btnInfText}>{btnInfo}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionContainer}>
            {exrItems.map((data, index) => (
              <ServisComp
                onPress={() => {
                  navigation.navigate(data.screen);
                }}
                key={index}
                title={data.title}
                description={data.description}
                imglink={data.imglink}
                bg={data.bg}
                textcolor={data.txt}
              />
            ))}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomScreen;

const styles = StyleSheet.create({
  wlcomeScreendiv: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 30, 30, 0.6)",
  },
  otherContent: {
    width: "100%",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  introLoginText: {
    fontSize: h("4%"),
    fontWeight: "bold",
    color: darkYellow,
    width: "90%",
  },
  introOtherText: {
    fontSize: h("2.8%"),
    fontWeight: "800",
    color: flLightColor,
    width: "90%",
  },
  btnAndInfoDiv: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "center",
  },
  myButton: {
    height: h("5%"),
    width: w("40%"),
    backgroundColor: firstColor,
    borderRadius: w("102%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  myButton2: {
    height: h("5%"),
    width: w("40%"),
    borderColor: "#fff",
    borderWidth: h("0.3%"),
    borderRadius: w("102%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontSize: h("2.5%"),
    color: "white",
  },
  btnInfText: {
    fontSize: h("2.5%"),
    color: flLightColor,
    textAlign: "center",
  },
  optionContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  // headeer
  headerDiv: {
    width: "100%",
    height: h("7%"),
    // backgroundColor: darkColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // opacity: 0.5,
  },
  logoText: {
    fontSize: h("3%"),
    color: flLightColor,
    textTransform: "capitalize",
  },
});
