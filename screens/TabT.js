import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, CardItem, Text, Body, Accordion } from "native-base";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from "native-base";

export default function TabT() {
  return (
    <View>
      <ScrollView style={styles.container}>
        <Card>
          <CardItem header bordered>
            <Text style={{ fontSize: 20 }}>Technological Intervention</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.text}>
                Technological devices are necessary to absorb sound from the
                environment
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Text style={styles.text}>
              Note that hearing aids and cochlear implants differs depending on
              how severe your child’s hearing loss is.
            </Text>
          </CardItem>
          <CardItem bordered>
            <Text style={styles.text}>
              Tap below for a classification of hearing loss in decibels, dB,
              which shows how loud sounds need to be for you to hear them
            </Text>
          </CardItem>
        </Card>
        <Collapse>
          <CollapseHeader>
            <Separator bordered style={styles.col}>
              <Text style={styles.tt}>***</Text>
            </Separator>
          </CollapseHeader>
          <CollapseBody>
            <ListItem>
              <Text>
                <Text style={styles.text1}>Normal: </Text>
                {"\n"}0 - 20 dB{" "}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text style={styles.text1}>Mild: </Text>
                {"\n"}21 - 39 dB {"\n"}Difficulty hearing speech in noisy
                environments
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text style={styles.text1}>Moderate: </Text>
                {"\n"}40 - 69 dB {"\n"}Difficulty hearing without hearing aid{" "}
                {"\n"}Can only hear loud speeches
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text style={styles.text1}>Severe: </Text>
                {"\n"}70 - 89 dB {"\n"}Difficulty hearing loud speeches {"\n"}
                Hearing aid/cochlear implants advised
              </Text>
            </ListItem>
            <ListItem last>
              <Text>
                <Text style={styles.text1}>Profound: </Text>
                {"\n"}90+ dB {"\n"}Cannot hear loud speech {"\n"}
                Cochlear implants needed
              </Text>
            </ListItem>
          </CollapseBody>
        </Collapse>
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
  },
  col: {
    backgroundColor: "#88AAFF",
    marginTop: 18
  },
  tt: {
    color: "white"
  },
  text1: {
    fontWeight: "bold"
  }
});
