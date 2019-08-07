import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { Card } from "react-native-elements";

export default function EducationScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.hd}>Listening Device</Text>
        <Text style={styles.listeningd}>hello</Text>
      </View>
      <View style={styles.ld}>
        <Button
          title="Listening Devices >"
          type="outline"
          onPress={() => {
            buttonClicked(props);
          }}
        />
      </View>
    </ScrollView>
  );
}

function buttonClicked(props) {
  props.navigation.navigate("ld");
}

EducationScreen.navigationOptions = {
  title: "Education"
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: "lavender"
  },
  hd: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  },
  listeningd: {
    fontSize: 17,
    marginLeft: 10,
    marginRight: 10
  },
  ld: {
    marginLeft: 10,
    marginRight: 10
  }
});
