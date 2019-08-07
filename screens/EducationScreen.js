import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function EducationScreen() {
  return <ScrollView style={styles.container} />;
}

EducationScreen.navigationOptions = {
  title: "Education"
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: "lavender"
  }
});
