import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { Segment, Button, Text, Content } from "native-base";
export default function EducationLdScreen() {
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
        {selectedTab == 1 && <Text>You selected one</Text>}
        {selectedTab == 2 && <Text>You selected two</Text>}
      </Content>
    </ScrollView>
  );
}

EducationLdScreen.navigationOptions = {
  title: "Listening Devices"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  listeningd: {}
});
