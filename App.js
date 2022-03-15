import { StyleSheet, Text, View, StatusBar } from "react-native";
import AuthScreen from "./src/Views/AuthScreen";
import GrupiTimerScreen from "./src/Views/GrupiTimerScreen";
import HomeScreen from "./src/Views/HomeScreen";
import MatOpskrifterScreen from "./src/Views/MatOpskrifterScreen";
import PtTimerScreen from "./src/Views/PtTimerScreen";
import WelcomScreen from "./src/Views/WelcomScreen";
export default function App() {
  return (
    <>
      <StatusBar />
      {/* <HomeScreen /> */}
      {/* <PtTimerScreen /> */}
      {/* <GrupiTimerScreen /> */}
      {/* <WelcomScreen /> */}
      {/* <MatOpskrifterScreen /> */}
      <AuthScreen />
    </>
  );
}
