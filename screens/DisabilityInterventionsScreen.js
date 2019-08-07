import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function DisabilityInterventionsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.interventions}>hey</Text>
      </View>
    </ScrollView>
  );
}

DisabilityInterventionsScreen.navigationOptions = {
  title: "Interventions"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  interventions: {}
});
