import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Card, Image } from "react-native-elements";
import Carousel from "react-native-snap-carousel";

const entries = [
  { image: require("../assets/images/babyHA.png") },
  { image: require("../assets/images/BTE.png") },
  { image: require("../assets/images/ITE.jpg") }
];

var { height, width } = Dimensions.get("window");
const fractionWidth = width * 0.85;
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
    paddingTop: 20,
    backgroundColor: "lavender"
  }
});
