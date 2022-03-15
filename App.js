import { StatusBar } from "react-native";

import CustomNavigator from "./src/AppNavigation/CustomNavigation";

export default function App() {
  return (
    <>
      <StatusBar />
      <CustomNavigator />
    </>
  );
}
