import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Text, Button } from "react-native-elements";

export default function EducationScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.hd}>Listening Device</Text>
        <Text style={styles.listeningd}>hello</Text>
        <View style={styles.ld}>
          <Button
            title="Listening Devices >"
            type="outline"
            onPress={() => {
              buttonClicked(props);
            }}
          />
        </View>
        <Text style={styles.hd}>Therapies</Text>
        <Text style={styles.listeningd}>
          Therapies are important for your child to get comfortable and make use
          of their listening devices effectively. The two common therapies in
          Indonesia is the Speech therapy, and auditory verbal rehabilitation.
          It is necessary to be aware of the differences of each therapy in
          order to make the right decision.
        </Text>
        <View style={styles.ld}>
          <Button
            title="Learn the differences here >"
            type="outline"
            onPress={() => {
              buttonPressed(props);
            }}
          />
        </View>
        <Text style={styles.hd}>Pregnancy Journey</Text>
        <Text style={styles.listeningd}>
          Having a healthy pregnancy journey is important to reduce the risk of
          your child obtaining problems with his/her hearing. There are
          different precautions you need to take throughout your pregnancy
          journey.
        </Text>
        <View style={styles.ld}>
          <Button
            title="Learn more >"
            type="outline"
            onPress={() => {
              buttonP(props);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

function buttonClicked(props) {
  props.navigation.navigate("ld");
}

function buttonPressed(props) {
  props.navigation.navigate("therapy");
}

function buttonP(props) {
  props.navigation.navigate("journey");
}

EducationScreen.navigationOptions = {
  title: "Education",
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
    paddingTop: 0,
    backgroundColor: "lavender"
  },
  hd: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10
  },
  listeningd: {
    fontSize: 17,
    marginLeft: 10,
    marginRight: 5,
    marginTop: 5
  },
  ld: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  }
});
