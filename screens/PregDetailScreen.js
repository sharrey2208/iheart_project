import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Card, CardItem, Header, Body } from "native-base";

export default function PregDetailScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        {props.navigation.getParam("journey").title}
      </Text>
      <Text style={styles.list}>
        {props.navigation.getParam("journey").list}
      </Text>
      <Text style={styles.list}>
        {props.navigation.getParam("journey").list1}
      </Text>
      <Text style={styles.list}>
        {props.navigation.getParam("journey").list2}
      </Text>
      <Text style={styles.list}>
        {props.navigation.getParam("journey").list3}
      </Text>
      <Text style={styles.list}>
        {props.navigation.getParam("journey").list4}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  header: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 10
  },
  list: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  container: {
    backgroundColor: "lavender"
  }
});
