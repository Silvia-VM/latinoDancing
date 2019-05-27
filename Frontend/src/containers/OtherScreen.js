import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class OtherScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Map"
    };
  };

  render() {
    return (
      <View>
        <View style={styles.container} />
        <Button
          title="Aller sur la page soirée"
          onPress={this.showMoreSoiree}
        />
      </View>
    );
  }
  showMoreSoiree = () => {
    this.props.navigation.navigate("Soiree");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default OtherScreen;
