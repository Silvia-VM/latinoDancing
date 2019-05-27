import React from "react";
import { Button, AsyncStorage, View } from "react-native";

class SignInScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Se connecter"
    };
  };

  render() {
    return (
      <View>
        <Button title="Se connecter" onPress={this.signInAsync} />
      </View>
    );
  }

  signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}

export default SignInScreen;
