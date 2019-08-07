import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { Card } from "react-native-elements";

export default function EducationScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.hd}>Listening Device</Text>
        <Text style={styles.listeningd}>hello</Text>
      </View>
      <View style={styles.ld}>
        <Button
          title="Listening Devices >"
          type="outline"
          onPress={() => {
            buttonClicked(props);
          }}
        />
      </View>
      <View>
        <Text style={styles.hd}>Therapies</Text>
        <Text style={styles.listeningd}>
          Therapies are important for your child to get comfortable and make use
          of their listening devices effectively. The two common therapies in
          Indonesia is the Speech therapy, and auditory verbal rehabilitation.
          It is necessary to be aware of the differences of each therapy in
          order to make the right decision.
        </Text>
      </View>
      <View style={styles.ld}>
        <Button
          title="Learn the difference here >"
          type="outline"
          onPress={() => {
            buttonPressed(props);
          }}
        />
      </View>
      <View>
        <Text style={styles.hd}>Pregnancy Journey</Text>
        <Text style={styles.preg}>
          having a healthy pregnancy journey is important to reduce the risk of
          your child obtaining problems with his/her hearing. There are
          different precautions you need to take throughout your pregnancy
          journey.
        </Text>
      </View>
      <View style={styles.ld}>
        <Button
          title="Learn more >"
          type="outline"
          onPress={() => {
            buttonP(props);
          }}
        />
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
  props.navigation.navigate("preg");
}

EducationScreen.navigationOptions = {
  title: "Education"
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: "lavender"
  },
  hd: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  },
  listeningd: {
    fontSize: 17,
    marginLeft: 10,
    marginRight: 10
  },
  ld: {
    marginLeft: 10,
    marginRight: 10
  }
});
