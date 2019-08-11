import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {} from "react-native-elements";
import { Text, Card, CardItem, Icon } from "native-base";

export default function HomeContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.emailno}>
          Feel free to contact/email any comments, opinions, or questions
          regarding this issue!{" "}
        </Text>
        <Card style={styles.card}>
          <Text style={styles.title}>Contact at:</Text>

          <View style={styles.row}>
            <Icon
              ios="ios-call"
              android="md-call"
              style={{ fontSize: 24, color: "#3474e3" }}
            />
            <Text style={styles.list}>0822-61063948</Text>
          </View>
          <View style={styles.row1}>
            <Icon
              ios="ios-mail"
              android="md-mail"
              style={{ fontSize: 24, color: "#3474e3" }}
            />
            <Text style={styles.list}>iheartproject22@gmail.com</Text>
          </View>
        </Card>
        <Text style={styles.insta}>
          Follow the iHEARt Instagram page to learn more about this issue and be
          updated with different kinds of talks and news!
        </Text>
        <Card style={styles.card}>
          <Text style={styles.title}>Instagram: </Text>
          <View style={styles.row1}>
            <Icon
              ios="logo-instagram"
              android="logi-instagram"
              style={{ fontSize: 24, color: "#3474e3" }}
            />
            <Text style={styles.list}>iheartproject_jkt</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

HomeContactScreen.navigationOptions = {
  title: "Contact Details",
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
  emailno: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 12,
    marginRight: 5
  },
  insta: {
    fontSize: 20,
    marginLeft: 12,
    marginTop: 15,
    marginRight: 5
  },
  title: {
    fontSize: 20,
    marginLeft: 12,
    marginTop: 10,
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5
  },
  row1: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10
  },
  card: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10
  },
  list: {
    fontSize: 18,
    marginLeft: 12
  }
});
