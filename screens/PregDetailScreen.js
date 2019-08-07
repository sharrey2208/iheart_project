import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PregDetailScreen(props) {
  return (
    <View>
      <Text>{props.navigation.getParam("journey").title}</Text>
    </View>
  );
}
