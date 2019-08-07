import React from "react";
import { View, Text } from "react-native";
import { List, ListItem } from "native-base";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

export default function TabAVT(props) {
  return (
    <View>
      <List>
        <ListItem>
          <Text style={styles.list}>Specifically for the hearing impaired</Text>
        </ListItem>
        <ListItem>
          <Text style={styles.list}>
            Enhances speech and listening through listening device
          </Text>
        </ListItem>
        <ListItem>
          <Text style={styles.list}>
            more likely to develop social and critical skills, and go to a
            normal school
          </Text>
        </ListItem>
        <ListItem>
          <Text style={styles.list}>
            Children can understand and make use of their devices
          </Text>
        </ListItem>
      </List>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    fontSize: 18
  }
});
