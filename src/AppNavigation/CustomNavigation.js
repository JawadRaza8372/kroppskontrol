import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "../Views/AuthScreen";
import GrupiTimerScreen from "../Views/GrupiTimerScreen";
import HomeScreen from "../Views/HomeScreen";
import MatOpskrifterScreen from "../Views/MatOpskrifterScreen";
import PtTimerScreen from "../Views/PtTimerScreen";
import WelcomScreen from "../Views/WelcomScreen";
import SplashScreen from "../Views/SplashScreen";
import Forgotpassword from "../Views/Forgotpassword";

const Stack = createNativeStackNavigator();

const CustomNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="WelcomScreen" component={WelcomScreen} />
        <Stack.Screen name="PtTimerScreen" component={PtTimerScreen} />
        <Stack.Screen
          name="MatOpskrifterScreen"
          component={MatOpskrifterScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GrupiTimerScreen" component={GrupiTimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CustomNavigator;
