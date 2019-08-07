import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Card } from "react-native-elements";

export default function DisabilityInterventionsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.interventions} />
      </View>
      <SegmentedControlTab
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        values={["Benefits", "Side Effects"]}
        selectedIndex={this.state.selectedIndex}
        onTabPress={this.handleIndexChange}
      />
    </ScrollView>
  );
}

DisabilityInterventionsScreen.navigationOptions = {
  title: "Interventions"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  interventions: {}
});
