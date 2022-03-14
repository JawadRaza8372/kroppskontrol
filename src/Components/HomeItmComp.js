import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { darkColor, flLightColor, lightColor } from "../AppColors";
const HomeItmComp = ({ title, description, imglink }) => {
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.headingText}>{title}</Text>
      <View style={styles.descriptDiv}>
        <Text style={styles.descrptText}>{description}</Text>
        {imglink && (
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXkUc5huIrCNKkV7gsgLQHbAZE2XAGvFv-g&usqp=CAU",
            }}
            style={styles.imgshow}
          />
        )}
      </View>
      <TouchableOpacity style={styles.myButton}>
        <Text style={styles.btnTxt}>Vis mer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeItmComp;

const styles = StyleSheet.create({
  mainDiv: {
    width: w("100%"),
    height: h("25%"),
    backgroundColor: darkColor,
    marginBottom: h("1%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  myButton: {
    height: h("4%"),
    width: w("30%"),
    backgroundColor: flLightColor,
    borderRadius: w("10%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontSize: h("2.3%"),
  },
  descriptDiv: {
    width: "90%",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  headingText: {
    fontSize: h("3%"),
    color: flLightColor,
    fontWeight: "bold",
  },
  descrptText: {
    fontSize: h("2%"),
    color: flLightColor,
    textAlign: "center",
  },
  imgshow: {
    width: w("20%"),
    height: h("8%"),
    borderRadius: 10,
  },
});
