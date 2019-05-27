import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class ListCours extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Listes des Cours"
    };
  };

  render() {
    return (
      <View>
        <View style={styles.container} />

        <Text>Liste des cours</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ListCours;
