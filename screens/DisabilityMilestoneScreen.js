import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body
} from "native-base";

export default function DisabilityMilestoneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>0 to 4 Months:</Text>
      <Content>
        <ListItem>
          <CheckBox checked={true} color="#4fa5f0" />
          <Body>
            <Text>Startle and wake up to sudden loud noises</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={true} color="#4fa5f0" />
          <Body>
            <Text>Recognize and calm down at a familiar/parent’s voice</Text>
          </Body>
        </ListItem>
      </Content>
      <Text style={styles.title}>4 to 9 Months:</Text>
      <Content>
        <ListItem>
          <CheckBox checked={true} color="#4fa5f0" />
          <Body>
            <Text>Turn eyes/head to familiar sounds</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={true} color="#4fa5f0" />
          <Body>
            <Text>Respond to changes in tone</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={true} color="#4fa5f0" />
          <Body>
            <Text>Make babbling noises</Text>
          </Body>
        </ListItem>
      </Content>
      <Text style={styles.title}>9 to 12 Months:</Text>
      <Content>
        <ListItem>
          <CheckBox checked={true} color="#4fa5f0" />
          <Body>
            <Text>Respond to his/her name</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={true} color="#4fa5f0" />
          <Body>
            <Text>Respond to music by bouncing/singing along</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={true} color="#4fa5f0" />
          <Body>
            <Text>Imitate sounds, say simple words such as ‘dada’/’mama’</Text>
          </Body>
        </ListItem>
      </Content>
    </ScrollView>
  );
}

DisabilityMilestoneScreen.navigationOptions = {
  title: "Hearing Milestone",
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
  title: {
    marginLeft: 18,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline"
  }
});
