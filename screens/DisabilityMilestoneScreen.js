import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, List, ListItem, Text, Icon } from "react-native-elements";

export default function DisabilityMilestoneScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.icon}>
          <Icon name="ios-checkbox-outline" type="ionicon" color="purple" />
          <Text style={styles.Head}>0 to 4 months:</Text>
        </View>
        <Text style={styles.list}>
          - Startle and wake up to sudden loud noises {"\n"}- Recognize and calm
          down at a familiar/parent’s voice
        </Text>
        <View style={styles.icon}>
          <Icon name="ios-checkbox-outline" type="ionicon" color="purple" />
          <Text style={styles.Head}>4 to 9 months:</Text>
        </View>
        <Text style={styles.list}>
          - Turn eyes/head to familiar sounds{"\n"}- Respond to changes in tone
          {"\n"}- Make babbling noises
        </Text>
        <View style={styles.icon}>
          <Icon name="ios-checkbox-outline" type="ionicon" color="purple" />
          <Text style={styles.Head}>9 to 12 months:</Text>
        </View>
        <Text style={styles.list}>
          - Respond to his/her name {"\n"}- Respond to music by bouncing/singing
          along{"\n"}- Imitate sounds, say simple words such as ‘dada’/’mama’
          {"\n"}
        </Text>
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
  icon: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10
  },
  Head: {
    fontSize: 23,
    marginLeft: 10,
    fontWeight: "bold"
  },
  list: {
    fontSize: 18,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10
  }
});
