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

export default function TabST(props) {
  return (
    <View>
      <List>
        <ListItem>
          <Text style={styles.list}>Open to all kinds of disabilities</Text>
        </ListItem>
        <ListItem>
          <Text style={styles.list}>
            Encourages the use of lip reading and sign language
          </Text>
        </ListItem>
        <ListItem>
          <Text style={styles.list}>
            Children end up mute, will find it harder to socialise with others,
            and end up going to a special school
          </Text>
        </ListItem>
        <ListItem>
          <Text style={styles.list}>
            Listening device will not be much of a use
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
