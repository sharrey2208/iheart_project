import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";

export default function TabR() {
  return (
    <View>
      <ScrollView>
        <Card>
          <CardItem header bordered>
            <Text style={{ fontSize: 20 }}>Rehabilitation Intervention</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.text}>
                Understand that the hearing journey is not completed right after
                receiving hearing aids or cochlear implants and is in fact, just
                the beginning
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>
              Patients are highly encouraged to go to an auditory rehabilitation
              program to practice their listening and further understand the
              function of their technology, allowing the brain to receive and
              process words effectively
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>
              This rehabilitation requires huge commitments from both the child
              and the parent/guardian, as it is a long, and regular therapy
              process that takes at least a few years for your child to make use
              of his/her listening device
            </Text>
          </CardItem>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  text: {
    fontSize: 17
  }
});
