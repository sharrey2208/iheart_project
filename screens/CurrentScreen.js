import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { Segment, Button, Text, Content } from "native-base";
import TabWorld from "./TabWorld";
import TabIndo from "./TabIndo";

export default function CurrentScreen() {
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
          <Text>World</Text>
        </Button>
        <Button
          last
          active={selectedTab === 2}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Text>Indonesia</Text>
        </Button>
      </Segment>
      <Content padder>
        {selectedTab == 1 && <TabWorld />}
        {selectedTab == 2 && <TabIndo />}
      </Content>
    </ScrollView>
  );
}

CurrentScreen.navigationOptions = {
  title: "Current",
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
  }
});
