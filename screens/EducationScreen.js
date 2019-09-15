import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Card, CardItem, Text, Body } from "native-base";

export default function EducationScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={{ fontSize: 20 }}>Listening Device</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.content}>
                The beginning of your child’s journey starts with the
                technological intervention, an important tool to stay connected
                to the surroundings and amplify speech sounds from background
                noises. {"\n"}
                {"\n"}
                The two main listening devices are:
              </Text>
            </Body>
          </CardItem>
        </Card>
        <View style={styles.ld}>
          <Button
            title="Listening Devices >"
            type="outline"
            onPress={() => {
              buttonClicked(props);
            }}
          />
        </View>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={{ fontSize: 20 }}>Therapies</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.content}>
                Therapies are important for your child to get comfortable and
                make use of their listening devices effectively. The two common
                therapies in Indonesia is the Speech therapy, and auditory
                verbal rehabilitation. It is necessary to be aware of the
                differences of each therapy in order to make the right decision.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <View style={styles.ld}>
          <Button
            title="Learn the differences here >"
            type="outline"
            onPress={() => {
              buttonPressed(props);
            }}
          />
        </View>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={{ fontSize: 20 }}>Pregnancy Journey</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.content}>
                Having a healthy pregnancy journey is important to reduce the
                risk of your child obtaining problems with his/her hearing.
                There are different precautions you need to take throughout your
                pregnancy journey.
              </Text>
            </Body>
          </CardItem>
        </Card>
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
  },
  content: {
    fontSize: 18
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8
  }
});
