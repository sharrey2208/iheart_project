import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function EducationLdScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.listeningd}>hey</Text>
      </View>
    </ScrollView>
  );
}

EducationLdScreen.navigationOptions = {
  title: "Listening Devices"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  listeningd: {}
});
