import { StatusBar, LogBox } from "react-native";
import { useEffect } from "react";
import CustomNavigator from "./src/AppNavigation/CustomNavigation";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./src/store";
// Company Login Name: kroppskontroll
// User login: admin
// Passord: Ballahalla55555
//api secret
// 3bfcd8ecbf4459e4ca433c8a6504e54532bfa354b842c6535495d94b1838a758
//api key
// 9f4d33685af1d0dada1e8b613e0ee3d1df6686a6fc572c2b907acb8eb38efd81
export default function App() {
  LogBox.ignoreLogs([
    "Setting a timer for a long period",
    "AsyncStorage has been extracted",
  ]);
  // const ifWorking = async () => {
  //   const check = await axios.post("https://user-api.simplybook.me/login", {
  //     companyLogin: " kroppskontroll",
  //     userLogin: "admin",
  //     userPassword: "Ballahalla55555",
  //   });
  //   console.log("checking=> ", check);
  // };
  // useEffect(() => {
  //   ifWorking();
  // }, []);

  return (
    <Provider store={store}>
      <StatusBar />
      <CustomNavigator />
    </Provider>
  );
}
