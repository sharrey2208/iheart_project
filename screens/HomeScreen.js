import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { MonoText } from "../components/StyledText";
import { Card, Text } from "react-native-elements";

const entries = [
  { image: require("../assets/images/slide1.png") },
  { image: require("../assets/images/slide2.png") },
  { image: require("../assets/images/slide4.png") }
];

var { height, width } = Dimensions.get("window");
const fractionWidth = width * 0.85;
export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>iHEARt Project</Text>
        <Text style={{ fontSize: 18 }}>
          An aim to educate and spread awareness to young and future parents on
          the importance of early intervention for hearing impaired children,
          such that any individual with hearing impairment can have a fair
          chance to communicate and be given the right opportunity to strive to
          their fullest potential!
        </Text>
      </Card>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Home"
};
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
    backgroundColor: "#fff"
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
