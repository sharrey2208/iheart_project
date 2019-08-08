import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Image, Icon } from "react-native-elements";
import Carousel from "react-native-snap-carousel";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Accordion,
  Text,
  Body
} from "native-base";

export default function DisabilityMilestoneScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.icon}>
        <Icon name="ios-checkbox-outline" type="ionicon" color="purple" />
        <Text style={styles.Head}>0 to 4 months:</Text>
      </View>
      <Card style={styles.card}>
        <CardItem bordered>
          <Text style={styles.list}>
            Startle and wake up to sudden loud noises
          </Text>
        </CardItem>
        <CardItem bordered>
          <Text style={styles.list}>
            Recognize and calm down at a familiar/parent’s voice
          </Text>
        </CardItem>
      </Card>
      <View style={styles.icon}>
        <Icon name="ios-checkbox-outline" type="ionicon" color="purple" />
        <Text style={styles.Head}>4 to 9 months:</Text>
      </View>

      <Card style={styles.card}>
        <CardItem bordered>
          <Text style={styles.list}>Turn eyes/head to familiar sounds</Text>
        </CardItem>
        <CardItem bordered>
          <Text style={styles.list}>Respond to changes in tone</Text>
        </CardItem>
        <CardItem>
          <Text style={styles.list}>Make babbling noises</Text>
        </CardItem>
      </Card>
      <View style={styles.icon}>
        <Icon name="ios-checkbox-outline" type="ionicon" color="purple" />
        <Text style={styles.Head}>9 to 12 months:</Text>
      </View>

      <Card style={styles.card}>
        <CardItem bordered>
          <Text style={styles.list}>Respond to his/her name</Text>
        </CardItem>
        <CardItem bordered>
          <Text style={styles.list}>
            Respond to music by bouncing/singing along
          </Text>
        </CardItem>
        <CardItem>
          <Text style={styles.list}>
            Imitate sounds, say simple words such as ‘dada’/’mama’
          </Text>
        </CardItem>
      </Card>
    </ScrollView>
  );
}

DisabilityMilestoneScreen.navigationOptions = {
  title: "12-Month Milestone"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  icon: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 15
  },
  Head: {
    fontSize: 22,
    marginLeft: 10,
    fontWeight: "bold"
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 7
  },
  list: {
    fontSize: 18
  }
});
