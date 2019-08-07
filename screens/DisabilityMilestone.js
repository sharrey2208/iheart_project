import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function DisabilityMilestoneScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.milestone} />
      </View>
    </ScrollView>
  );
}

DisabilityMilestoneScreen.navigationOptions = {
  title: "12-Month Milestone"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  milestone: {}
});
