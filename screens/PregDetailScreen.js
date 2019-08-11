import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Card, CardItem, Header, Body, Text } from "native-base";

export default function PregDetailScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text style={{ fontSize: 20 }}>
            {props.navigation.getParam("journey").title}
          </Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text style={styles.listone}>
              {props.navigation.getParam("journey").list1}
            </Text>
          </Body>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text style={styles.listone}>
              {props.navigation.getParam("journey").list2}
            </Text>
          </Body>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text style={styles.listone}>
              {props.navigation.getParam("journey").list3}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </ScrollView>
  );
}

PregDetailScreen.navigationOptions = {
  title: "Pregnancy Journey",
  headerStyle: {
    backgroundColor: "#a794ff"
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 18
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  header: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#3352e8"
  },
  container: {
    backgroundColor: "lavender"
  },
  card: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 15
  },
  listone: {
    fontSize: 17
  }
});
