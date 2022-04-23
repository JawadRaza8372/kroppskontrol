import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import { darkColor, firstColor } from "../AppColors";
import { flLightColor, darkYellow } from "../AppColors";
import { db } from "../Database/FirebaseConfig";
import { useSelector } from "react-redux";
const OrderComponents = ({ closeModal, data }) => {
  const [cardinfo, setcardinfo] = useState({ cardNumber: "", cvc: "" });
  const { isAuth } = useSelector((state) => state.auth);
  let price = "120$";
  // component rsponsible for the order information or servis inforamation that you are now going to buy
  const postorder = async () => {
    if (cardinfo.cardNumber && cardinfo.cvc) {
      if (cardinfo.cardNumber.length > 16 || cardinfo.cardNumber.length < 16) {
        alert("Please Enter Valid Card Number.");
      } else {
        if (cardinfo.cvc.length === 3) {
          await db
            .collection("invoice")
            .add({
              service: data.title,
              bookedAt: new Date(),
              price: price,
              email: isAuth.email,
              userid: isAuth.id,
            })
            .then((dat) => {
              alert("You have successfully bought this service.");
              closeModal();
              console.log(dat.id);
            })
            .catch((e) => {
              alert(e.message);
            });
        } else {
          alert("Please Enter Valid CVC.");
        }
      }
    } else {
      alert("Card Number and CVC are required.");
    }
  };
  return (
    <View style={styles.orderDiv}>
      <Text style={styles.heading}>{data.title}</Text>
      {/* <Text style={styles.pakeInfo}>*Pakke Info*</Text> */}
      <View style={styles.textContain}>
        {data.desc && data.desc !== " " && (
          <Text style={styles.descInfo}>{data.desc}</Text>
        )}
        <Text style={styles.descInfo}>Time:{new Date().toTimeString()}</Text>
        <Text style={styles.descInfo}>Price:{price}</Text>
        <Text style={styles.descInfo2}>kortinformasjon</Text>
      </View>
      <TextInput
        style={styles.simpleInput}
        placeholder="kortnummer"
        placeholderTextColor={firstColor}
        value={cardinfo.cardNumber}
        onChangeText={(text) => {
          setcardinfo((prevalue) => {
            return {
              ...prevalue,
              cardNumber: text,
            };
          });
        }}
        maxLength={16}
      />
      <TextInput
        style={styles.simpleInput}
        placeholder="CVC"
        placeholderTextColor={firstColor}
        value={cardinfo.cvc}
        onChangeText={(text) => {
          setcardinfo((prevalue) => {
            return {
              ...prevalue,
              cvc: text,
            };
          });
        }}
        maxLength={3}
      />
      {/* <Text style={styles.pakeInfo}>*Pakke Info*</Text> */}
      <View style={styles.btnCont}>
        <TouchableOpacity onPress={postorder} style={styles.myButton}>
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
    height: h("58%"),
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
  descInfo2: {
    fontSize: h("1.5%"),
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
  simpleInput: {
    width: "85%",
    height: h("6%"),
    backgroundColor: flLightColor,
    marginBottom: h("2%"),
    borderRadius: h("1%"),
    paddingHorizontal: 10,
    color: darkColor,
    fontSize: h("2.2%"),
    alignSelf: "center",
  },
});
