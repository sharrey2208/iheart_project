import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Image } from "react-native-elements";
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

export default function TabAVT(props) {
  return (
    <View>
      <ScrollView>
        <Card>
          <CardItem header bordered>
            <Text style={{ fontSize: 20 }}>Auditory Verbal Therapy</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>Specifically for the hearing impaired</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Text>Enhances speech and listening through listening device</Text>
          </CardItem>
          <CardItem bordered>
            <Text>
              more likely to develop social and critical skills, and go to a
              normal school
            </Text>
          </CardItem>
          <CardItem bordered>
            <Text>Children can understand and make use of their devices</Text>
          </CardItem>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavender"
  }
});
