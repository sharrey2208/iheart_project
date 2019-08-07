import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Text, Button } from "react-native-elements";

export default function DisabilityScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.hd}>Hidden Disability</Text>
        <Text style={styles.hiddend}>
          Compared to other disabilities such as vision, mobility, or
          psychological disorders, a hearing disability accounts as a “Hidden
          Disability” as one may not recognize it by the physical outlook. This
          means that less attention will be given to those hearing impaired, and
          it is not deemed as higher priority as other disabilities.
        </Text>
        <Text style={styles.hd}>Signs of Deafness</Text>
        <Text style={styles.hiddend}>
          When it comes to this hidden disability, It is hard to recognize if
          your child has trouble hearing and even after passing the initial
          hearing screening, it is still advised to look out for the possible
          signs through hearing milestones for newborns. If not reached, it is
          best to consult with a pediatrician as early as possible.
        </Text>
        <View style={styles.milestone}>
          <Button
            title="12-Month Milestone >"
            type="outline"
            onPress={() => {
              buttonPressed(props);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

DisabilityScreen.navigationOptions = {
  title: "Disability"
};

function buttonPressed(props) {
  props.navigation.navigate("milestone");
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: "lavender"
  },
  hiddend: {
    fontSize: 17,
    marginLeft: 10,
    marginRight: 5,
    marginTop: 5
  },
  hd: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    marginTop: 10
  }
});
