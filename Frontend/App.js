import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import AuthLoadingScreen from "./src/containers/AuthLoadingScreen";
import SignInScreen from "./src/containers/SignInScreen";
import SignUpScreen from "./src/containers/SignUpScreen";
import HomeScreen from "./src/containers/HomeScreen";
import OtherScreen from "./src/containers/OtherScreen";
import TabNavigator from "./src/containers/TabNavigator";
import InfoSoiree from "./src/containers/InfoSoiree";
import ListFestival from "./src/containers/ListFestival";
import ListCours from "./src/containers/ListCours";

const AppStack = createStackNavigator({
  Tab: TabNavigator,
  Home: HomeScreen,
  Other: OtherScreen,
  Soiree: InfoSoiree,
  Festivals: ListFestival,
  Cours: ListCours
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const AuthUpStack = createStackNavigator({ SignUp: SignUpScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      AuthUp: AuthUpStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
