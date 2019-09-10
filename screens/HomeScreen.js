import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, ScrollView, StyleSheet, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Card, Text, Button } from "react-native-elements";
import { CardItem } from "native-base";
import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

const entries = [
  { image: require("../assets/images/slide1.png") },
  { image: require("../assets/images/slide2.png") },
  { image: require("../assets/images/slide3.png") }
];

var { height, width } = Dimensions.get("window");
const fractionWidth = width * 0.9;
export default function HomeScreen(props) {
  return (
    <ScrollView style={styles.container}>
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
        <CardItem bordered>
          <Text style={styles.title}>iHEARt Project</Text>
        </CardItem>
        <Text style={styles.content}>
          An aim to educate and spread awareness to young and future parents on
          the importance of early intervention for hearing impaired children,
          such that any individual with hearing impairment can have a fair
          chance to communicate and be given the right opportunity to strive to
          their fullest potential!
        </Text>
        <Text style={styles.content}>
          A small community within a large population, it is necessary to
          educate on an issue that may not be well known to the general public
        </Text>
      </Card>
      <View style={styles.contact}>
        <Button
          title="Contact Details >"
          type="outline"
          color="#b5adf7"
          onPress={() => {
            buttonPressed(props);
          }}
        />
      </View>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: "iHEARt",
  headerStyle: {
    backgroundColor: "#a794ff"
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
    fontFamily: "Courier New",
    fontSize: 24
  }
};

function buttonPressed(props) {
  props.navigation.navigate("Contact");
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

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
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
  contact: {
    marginTop: 18,
    marginLeft: 13,
    marginRight: 13
  },
  content: {
    fontSize: 18,
    marginTop: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  }
});
