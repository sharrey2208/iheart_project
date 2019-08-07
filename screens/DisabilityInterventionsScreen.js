import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { Segment, Button, Text, Content } from "native-base";
import TabTechnological from "./TabTechnological";
import TabAuditory from "./TabAuditory";

export default function DisabilityInterventionScreen() {
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
          <Text>Hearing Aids</Text>
        </Button>
        <Button
          last
          active={selectedTab === 2}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Text>Cochlear Implants</Text>
        </Button>
      </Segment>
      <Content padder>
        {selectedTab == 1 && <TabTechnological />}
        {selectedTab == 2 && <TabAuditory />}
      </Content>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  interventions: {}
});
