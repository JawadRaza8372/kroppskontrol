import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { darkColor, darkYellow } from "../AppColors";
import { w, h } from "react-native-responsiveness";
import HomeItmComp from "../Components/HomeItmComp";
import PtTimerItmComp from "../Components/PtTimerItmComp";

const GrupiTimerScreen = () => {
  const newArry = [
    {
      title: "Generelle info",
      desc: "Cardio grupper:Cardio step Bodyshape Transformer",
    },
    {
      title: "Gruppetimer",
      desc: "Be still gruppetime na og fa god tillbud..",
    },
    { title: "Solotimer" },
    { title: "Tren med enn ven!", desc: "studentpakke-trening pa\nbudjest" },
    { title: "Cardiyo" },
    { title: "Styrke" },
  ];
  return (
    <View style={styles.HomeScreendiv}>
      <ScreenHeader />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjJ5dtkInVRfCliO4BUQXbP4_mlvrSpmNBQ&usqp=CAU",
          }}
          style={styles.screenImge}
        />
        <View style={styles.fillback}>
          <Text style={styles.filltxt}>Sosial trening</Text>
        </View>
      </View>
      {/* in map function we want to repeat this component but with differant content means same look but differnt data so we provide data in aaray and with map we spcified that which attribute should have which array's object data */}
      {/* navigation.navigate("screen name") will be responsible to go from current screen to next screen whose name you will mantion */}

      <ScrollView contentContainerStyle={styles.contentDiv}>
        {newArry.map((dat, index) => (
          <PtTimerItmComp key={index} title={dat.title} subtitle={dat.desc} />
        ))}
      </ScrollView>
    </View>
  );
};

export default GrupiTimerScreen;

const styles = StyleSheet.create({
  HomeScreendiv: {
    width: "100%",
    height: "100%",
    backgroundColor: darkYellow,
  },
  imageContainer: {
    width: "100%",
    height: h("30%"),
    marginBottom: h("2%"),
    position: "relative",
  },
  screenImge: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentDiv: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  fillback: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "absolute",
    top: 0,
  },
  filltxt: {
    fontSize: h("7%"),
    color: darkYellow,
  },
});
