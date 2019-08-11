import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { Segment, Button, Text, Content } from "native-base";
import TabST from "./TabST";
import TabAVT from "./TabAVT";

export default function EducationTherapiesScreen() {
  [selectedTab, setSelectedTab] = useState(1);
  return (
    <ScrollView style={styles.container}>
      <Segment>
        <Button
          first
          active={selectedTab === 1}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Text>Speech Therapy</Text>
        </Button>
        <Button
          last
          active={selectedTab === 2}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Text>Auditory Verbal Therapy</Text>
        </Button>
      </Segment>
      <Content padder>
        {selectedTab == 1 && <TabST />}
        {selectedTab == 2 && <TabAVT />}
      </Content>
    </ScrollView>
  );
}

EducationTherapiesScreen.navigationOptions = {
  title: "Therapies",
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
  listeningd: {}
});
