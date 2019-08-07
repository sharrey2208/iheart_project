import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function EducationTherapiesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.therapies}>hey</Text>
      </View>
    </ScrollView>
  );
}

EducationTherapiesScreen.navigationOptions = {
  title: "Therapies"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  therapies: {}
});
