import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { List, ListItem } from "native-base";
import PregDetailScreen from "./PregDetailScreen";
import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

const journey = [
  { title: "Before Pregnancy", age: "12" },
  { title: "During Pregnancy", age: "15" },
  { title: "After Pregnancy", age: "30" },
  { title: "Premature Birth", age: "12" }
];

function showjourney(props, journey) {
  props.navigation.push("PregDetail", { journey: journey });
}
export default function EducationPlScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <List>
          {journey.map(journey => {
            return (
              <ListItem
                key={journey.title}
                onPress={() => {
                  showjourney(props, journey);
                }}
              >
                <Text>{journey.title}</Text>
              </ListItem>
            );
          })}
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
