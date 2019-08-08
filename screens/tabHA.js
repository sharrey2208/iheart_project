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

const dataArray = [
  {
    title: "Precautions",
    content:
      "often change batteries(make sure it’s clean), avoid heat and moisture & store in a dry place, regularly clean hearing aids and change wax filter."
  },
  {
    title: "Pros",
    content:
      "lightweight and comfortable, easy to use/remove, comes in different types and styles(customized)"
  },
  {
    title: "Cons",
    content: "high price (between 1500-3500USD per unit) , maintenance issues"
  }
];

const entries = [
  { image: require("../assets/images/babyHA.png") },
  { image: require("../assets/images/behind.png") },
  { image: require("../assets/images/ite.png") }
];

var { height, width } = Dimensions.get("window");
const fractionWidth = width * 0.95;
export default function TabHA(props) {
  return (
    <View>
      <ScrollView>
        <View style={{ height: 230 }}>
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
            <Text style={{ fontSize: 20 }}>Hearing Aids</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                Small and removable, battery-powered electronic device
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Text>
              Microphone: picks up sound from the environment and converts them
              into electrical signals {"\n"}
              {"\n"}
              Amplifier: increases the loudness of the signals from the
              microphone and modifies the sound such that it cancels out
              background noises{"\n"}
              {"\n"}
              Receiver: also known as a speaker located in the inner ear, the
              receiver converts the signals to audible sounds.
            </Text>
          </CardItem>
        </Card>
        <ScrollView style={styles.container}>
          <Accordion
            style={styles.accord}
            dataArray={dataArray}
            expanded={0}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
            headerStyle={{ backgroundColor: "#ededed", fontSize: 17 }}
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
    shadowRadius: 3,
    shadowColor: "indigo",
    shadowOpacity: 1
  },
  carousel: {
    paddingTop: 10,
    backgroundColor: "lavender"
  },
  accord: {
    marginTop: 15
  }
});
