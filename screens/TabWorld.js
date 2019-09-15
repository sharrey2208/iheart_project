import React from "react";
import { Image, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Card, CardItem, Accordion, Text, Body } from "native-base";

const entries = [
  { image: require("../assets/images/WorldSlide1.png") },
  { image: require("../assets/images/WorldSlide2.png") }
];

var { height, width } = Dimensions.get("window");
const fractionWidth = width * 0.9;
export default function TabWorld(props) {
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
            <Text style={{ fontSize: 20 }}>World</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textt}>
                Around 466 million people in the world has disabled hearing
                loss, and 34 million of these are children.
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textt}>
                By 2050, one in ten, and over 900 million people will have
                disabled hearing loss.
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textt}>
                One third of people over 65 years of age are affected by
                disabling hearing loss, and this age group is greatest in South
                Asia, Asia Pacific and sub-Saharan Africa
              </Text>
            </Body>
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
    shadowRadius: 1,
    shadowColor: "indigo",
    shadowOpacity: 1
  },
  carousel: {
    paddingTop: 20,
    backgroundColor: "lavender"
  },
  textt: {
    fontSize: 17
  }
});
