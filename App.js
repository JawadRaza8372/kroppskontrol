import { StyleSheet, Text, View, StatusBar } from "react-native";
import GrupiTimerScreen from "./src/Views/GrupiTimerScreen";
import HomeScreen from "./src/Views/HomeScreen";
import PtTimerScreen from "./src/Views/PtTimerScreen";
export default function App() {
  return (
    <>
      <StatusBar />
      {/* <HomeScreen /> */}
      {/* <PtTimerScreen /> */}
      <GrupiTimerScreen />
    </>
  );
}
