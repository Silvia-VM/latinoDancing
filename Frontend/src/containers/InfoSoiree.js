import React from "react";
import { StyleSheet, Text, View } from "react-native";

class InfoSoiree extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Infos soirées"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>soirée</Text>
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

export default InfoSoiree;
