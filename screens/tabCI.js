import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Image } from "react-native";
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

const dataArray = [
  {
    title: "Precautions",
    content:
      "turn off sound processor or move away from digital cellular phones(might interrupt system), avoid physical activities that may cause direct impact to the head/site of implant, avoid high levels of static electricity(damage electronic components)"
  },
  {
    title: "Pros",
    content:
      "ability to pick up different types of sounds, replace the need for lip reading/sign language, one-time procedure(unless technological failure), improve speech skills"
  },
  {
    title: "Cons",
    content:
      "possible side effects(bleeding, infection, facial paralysis), may not produce much result, requires lots of rehabilitation, expensive(about 25,000USD per ear)"
  }
];

const entries = [
  { image: require("../assets/images/babyCI.png") },
  { image: require("../assets/images/ci.png") }
];

var { height, width } = Dimensions.get("window");
const fractionWidth = width * 0.9;
export default function TabHA(props) {
  return (
    <View>
      <ScrollView>
        <View style={{ height: 240 }}>
          <Carousel
            data={entries}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={fractionWidth}
            inactiveSlideScale={0.95}
            slideStyle={styles.slideStyle}
            containerCustomStyle={styles.carousel}
          />
        </View>
        <Card>
          <CardItem header bordered>
            <Text style={{ fontSize: 20 }}>Cochlear Implants</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>Surgically implanted neuroprosthetic device</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Text>
              Consists of an external sound processor and the cochlear implant
              itself.{"\n"}
              {"\n"}
              Electrical signals from processor are transmitted directly to the
              hearing nerve, bypassing the damaged parts of the inner ear.
            </Text>
          </CardItem>
        </Card>
        <ScrollView style={styles.container}>
          <Accordion
            style={styles.accord}
            dataArray={dataArray}
            expanded={0}
            icon="arrow-down"
            expandedIcon="arrow-up"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
            headerStyle={{ backgroundColor: "#ededed" }}
            contentStyle={{ backgroundColor: "white" }}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function renderItem({ item }) {
  return (
    <Image
      source={item.image}
      resizeMode="cover"
      style={styles.carouselImage}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavender"
  },
  carouselImage: {
    height: 200,
    width: "100%"
  },
  slideStyle: {
    shadowRadius: 1,
    shadowColor: "indigo",
    shadowOpacity: 1
  },
  carousel: {
    paddingTop: 20,
    backgroundColor: "lavender"
  },
  accord: {
    marginTop: 15
  }
});
