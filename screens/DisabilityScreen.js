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
        <Text style={styles.hd}>Interventions</Text>
        <Text style={styles.hiddend}>
          When not detected or intervened early enough, further problems will
          arise. Having a hearing disability means that your child will be more
          prone to struggle in comprehending language and speech, resulting in
          behavioral problems where your child will feel frustrated, isolated
          and not understood by others. In some cases, your child may start
          having psychological problems.
        </Text>
        <Text style={styles.hiddend}>
          It is important to intervene during the Golden Age, from 0 to 3 years
          old. This is because the brain is much more flexible during the
          younger years, making it much easier for children to start learning
          and comprehending words with their hearing aids or cochlear implants
        </Text>
        <View style={styles.interventions}>
          <Button
            title="Interventions >"
            type="outline"
            onPress={() => {
              buttonClicked(props);
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

function buttonClicked(props) {
  props.navigation.navigate("interventions");
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
  },
  milestone: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 7
  },
  interventions: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 7
  }
});
