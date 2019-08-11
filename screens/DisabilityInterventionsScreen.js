import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { Segment, Button, Text, Content } from "native-base";
import TabT from "./TabT";
import TabR from "./TabR";

export default function DisabilityInterventionsScreen() {
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
          <Text>Technological</Text>
        </Button>
        <Button
          last
          active={selectedTab === 2}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Text>Rehabilitation</Text>
        </Button>
      </Segment>
      <Content padder>
        {selectedTab == 1 && <TabT />}
        {selectedTab == 2 && <TabR />}
      </Content>
    </ScrollView>
  );
}

DisabilityInterventionsScreen.navigationOptions = {
  title: "Interventions",
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
