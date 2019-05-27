import React from "react";
import { Button, AsyncStorage, View } from "react-native";

class SignUpScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Créer un compte"
    };
  };

  render() {
    return (
      <View>
        <Button title="Creation compte" onPress={this.signUpAsync} />
      </View>
    );
  }

  signUpAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}

export default SignUpScreen;
