import { StyleSheet, Text, View, Modal } from "react-native";
import React, { useState } from "react";
import OrderComponents from "./OrderComponents";

const CustomModel = ({ showModal, toggleModal, data }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={toggleModal}
    >
      <View style={styles.filldiv}>
        <OrderComponents data={data} />
      </View>
    </Modal>
  );
};

export default CustomModel;

const styles = StyleSheet.create({
  filldiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});
