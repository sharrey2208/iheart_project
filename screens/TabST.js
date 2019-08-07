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

const entries = [
  { image: require("../assets/images/babyHA.png") },
  { image: require("../assets/images/BTE.png") },
  { image: require("../assets/images/ITE.jpg") }
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
            <Text style={{ fontSize: 20 }}>Speech Therapy</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>Open to all kinds of disabilities</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Text>Encourage the use of lip reading and sign language</Text>
          </CardItem>
          <CardItem>
            <Text>
              Children end up mute, will find it harder to socialise with
              others, and end up going to a special school.
            </Text>
          </CardItem>
          <CardItem>
            <Text>Listening device will not be much of a use.</Text>
          </CardItem>
        </Card>
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
  }
});
