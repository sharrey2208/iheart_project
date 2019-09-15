import React from "react";
import { Image, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Card, CardItem, Accordion, Text, Body } from "native-base";

const entries = [
  { image: require("../assets/images/Indo1.png") },
  { image: require("../assets/images/Indo2.png") },
  { image: require("../assets/images/Indo3.png") },
  { image: require("../assets/images/Indo4.png") },
  { image: require("../assets/images/Indo5.png") },
];

var { height, width } = Dimensions.get("window");
const fractionWidth = width * 0.9;
export default function TabIndo(props) {
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
            <Text style={{ fontSize: 20 }}>Indonesia</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textt}>
                The Indonesian Ministry of Health continues to strive to reduce
                hearing loss in Indonesia and targets hearing loss to be reduced
                to 90% by 2030.
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textt}>
                Five types of policies and strategies for overcoming the hearing
                loss and achieving these targets are:
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textt}>
                1. Move and empower people to live healthy so they can avoid
                risk factors.{"\n"}
                {"\n"}
                2. Increasing public access to quality health services through
                strengthening resources, and standardizing services,{"\n"}
                {"\n"}
                3. Enhancing partnerships with cross-program, cross-sectoral,
                and related stakeholders,{"\n"}
                {"\n"}
                4. Carry out Surveillance by integrating into the surveillance
                system of non-communicable diseases in the Health Services
                Facility and the community.{"\n"}
                {"\n"}
                5. Increasing advocacy to the Regional Government, Village
                Government, and related stakeholders.
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
  accord: {
    marginTop: 15
  },
  textt: {
    fontSize: 17
  }
});
