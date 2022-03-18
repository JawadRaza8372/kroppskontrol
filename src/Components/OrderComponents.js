import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { darkColor } from "../AppColors";
import { flLightColor, darkYellow } from "../AppColors";
const OrderComponents = ({ data }) => {
  // component rsponsible for the order information or servis inforamation that you are now going to buy
  return (
    <View style={styles.orderDiv}>
      <Text style={styles.heading}>{data.title}</Text>
      {/* <Text style={styles.pakeInfo}>*Pakke Info*</Text> */}
      <View style={styles.textContain}>
        {data.desc && data.desc !== " " && (
          <Text style={styles.descInfo}>{data.desc}</Text>
        )}
        <Text style={styles.descInfo}>Time</Text>
        <Text style={styles.descInfo}>Price</Text>
      </View>
      {/* <Text style={styles.pakeInfo}>*Pakke Info*</Text> */}
      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.myButton}>
          <Text style={styles.btnTxt}>kjøpe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderComponents;

const styles = StyleSheet.create({
  orderDiv: {
    width: w("85%"),
    height: h("50%"),
    backgroundColor: darkColor,
    borderRadius: h("4%"),
    alignSelf: "center",
    overflow: "hidden",
    padding: 15,
  },
  btnCont: {
    width: "95%",
    marginRight: w("6%"),
    display: "flex",
    alignItems: "flex-end",
  },
  myButton: {
    height: h("4%"),
    width: w("30%"),
    backgroundColor: darkYellow,
    borderRadius: w("10%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontSize: h("2.3%"),
  },
  heading: {
    fontSize: h("2.6%"),
    color: flLightColor,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: h("2%"),
  },
  pakeInfo: {
    fontSize: h("1.8%"),
    color: flLightColor,
  },
  descInfo: {
    fontSize: h("2%"),
    color: flLightColor,
    width: "97%",
    alignSelf: "center",
  },
  textContain: {
    width: "96%",
    alignSelf: "center",
    flex: 1,
    paddingVertical: h("1%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
});
