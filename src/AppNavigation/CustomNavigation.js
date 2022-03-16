import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GrupiTimerScreen from "../Views/GrupiTimerScreen";
import HomeScreen from "../Views/HomeScreen";
import MatOpskrifterScreen from "../Views/MatOpskrifterScreen";
import PtTimerScreen from "../Views/PtTimerScreen";
import WelcomScreen from "../Views/HomeScreen";
import SplashScreen from "../Views/SplashScreen";
import Forgotpassword from "../Views/Forgotpassword";
import LoginScreen from "../Views/LoginScreen";
import CaregoryScreen from "../Views/CaregoryScreen";

const Stack = createNativeStackNavigator();
// This file is completely rsponsible for the navigation of whole app if any file is missing or doest not included in it then that screen will not be applay to display and might cause an unwanted error
const CustomNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="HomeSrceen" component={HomeScreen} />
        <Stack.Screen name="PtTimerScreen" component={PtTimerScreen} />
        <Stack.Screen
          name="MatOpskrifterScreen"
          component={MatOpskrifterScreen}
        />
        <Stack.Screen name="CaregoryScreen" component={CaregoryScreen} />
        <Stack.Screen name="GrupiTimerScreen" component={GrupiTimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CustomNavigator;
