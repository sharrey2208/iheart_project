import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function HomeContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.emailno}>
          Feel free to contact/email any comments, opinions, or questions
          regarding this issue!{" "}
        </Text>
        <Card>
          <Text style={styles.number}>Contact at:</Text>
          <Text style={styles.number}>0822-61063948</Text>
          <Text style={styles.number}>iheartproject22@gmail.com</Text>
        </Card>
        <Text style={styles.instagram}>
          Follow the iHEARt Instagram page to learn more about this issue and be
          updated with different kinds of talks and news!
        </Text>
        <Card>
          <Text style={styles.insta}>Instagram: iheartproject_jkt</Text>
        </Card>
      </View>
    </ScrollView>
  );
}

HomeContactScreen.navigationOptions = {
  title: "Contact Details"
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
  number: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5
  },
  instagram: {
    marginTop: 15,
    fontSize: 20,
    marginLeft: 12,
    marginRight: 5
  },
  insta: {
    fontSize: 20,
    marginLeft: 10
  }
});
