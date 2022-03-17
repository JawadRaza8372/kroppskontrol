import { StatusBar } from "react-native";
import { useEffect } from "react";
import CustomNavigator from "./src/AppNavigation/CustomNavigation";
import axios from "axios";
// Company Login Name: kroppskontroll
// User login: admin
// Passord: Ballahalla55555
//api secret
// 3bfcd8ecbf4459e4ca433c8a6504e54532bfa354b842c6535495d94b1838a758
//api key
// 9f4d33685af1d0dada1e8b613e0ee3d1df6686a6fc572c2b907acb8eb38efd81
export default function App() {
  const ifWorking = () => {
    // var loginClient = new jsonrpc_client({
    //   url: "https://user-api.simplybook.me" + "/login",
    //   onerror: function (error) {},
    // });
    const loginClient = fetch("https://user-api.simplybook.me/login", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    Promise.bind(loginClient);
    // var token = loginClient.getServiceUrl("kroppskontroll");
    //
    // const check = await axios.get(" https://user-api.simplybook.me/login");
    // let geting = check?.getServiceUrl("kroppskontroll");
    console.log("checking=> ", loginClient);
  };
  useEffect(() => {
    ifWorking();
  }, []);

  return (
    <>
      <StatusBar />
      <CustomNavigator />
    </>
  );
}
