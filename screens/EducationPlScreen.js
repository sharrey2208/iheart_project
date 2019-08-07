import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function EducationPlScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.therapies}>hey</Text>
      </View>
    </ScrollView>
  );
}

EducationPlScreen.navigationOptions = {
  title: "Pregnancy Journey"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  therapies: {}
});
