import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { Accordion } from "native-base";

const dataArray = [
  { title: "Community Belief", content: "Lorem ipsum dolor sit amet" },
  { title: "ENT Belief", content: "Lorem ipsum dolor sit amet" }
];

export default function CurrentScreen() {
  return (
    <ScrollView style={styles.container}>
      <Accordion dataArray={dataArray} expanded={0} />
    </ScrollView>
  );
}

CurrentScreen.navigationOptions = {
  title: "Current",
  headerStyle: {
    backgroundColor: "#a794ff"
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 18
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: "lavender"
  }
});
