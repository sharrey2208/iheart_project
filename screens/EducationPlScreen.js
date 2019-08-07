import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { List, ListItem } from "native-base";

export default function EducationPlScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <List>
          <ListItem>
            <Text>Simon Mignolet</Text>
          </ListItem>
          <ListItem>
            <Text>Nathaniel Clyne</Text>
          </ListItem>
          <ListItem>
            <Text>Dejan Lovren</Text>
          </ListItem>
        </List>
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
