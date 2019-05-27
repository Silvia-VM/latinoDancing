import React from "react";
import { Button, View } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Accueil"
    };
  };

  render() {
    return (
      <View>
        <Button title="Aller sur map" onPress={this.showMoreApp} />
        <Button title="Aller sur Festival" onPress={this.showMoreFestival} />
        <Button title="Aller sur Cours" onPress={this.showMoreCours} />
        <Button title="Sign in" onPress={this.signInAsync} />
        <Button title="Sign up" onPress={this.signUpAsync} />
      </View>
    );
  }

  showMoreApp = () => {
    this.props.navigation.navigate("Other");
  };

  showMoreFestival = () => {
    this.props.navigation.navigate("Festivals");
  };

  showMoreCours = () => {
    this.props.navigation.navigate("Cours");
  };

  signInAsync = () => {
    this.props.navigation.navigate("Auth");
  };

  signUpAsync = () => {
    this.props.navigation.navigate("AuthUp");
  };
}

export default HomeScreen;
