import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import CurrentScreen from "../screens/CurrentScreen";
import DisabilityScreen from "../screens/DisabilityScreen";
import EducationScreen from "../screens/EducationScreen";
import HomeContactScreen from "../screens/HomeContactScreen";
import DisabilityMilestoneScreen from "../screens/DisabilityMilestoneScreen";
import DisabilityInterventionsScreen from "../screens/DisabilityInterventionsScreen";
import EducationLdScreen from "../screens/EducationLdScreen";
import EducationTherapiesScreen from "../screens/EducationTherapiesScreen";
import EducationPlScreen from "../screens/EducationPlScreen";
import PregDetailScreen from "../screens/PregDetailScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: "Home"
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Contact: HomeContactScreen
  },

  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};

HomeStack.path = "";

const Current = createStackNavigator(
  {
    Current: CurrentScreen
  },
  config
);

Current.navigationOptions = {
  tabBarLabel: "Current",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-warning" : "md-warning"}
    />
  )
};

Current.path = "";

const Disability = createStackNavigator(
  {
    Disability: DisabilityScreen,
    milestone: DisabilityMilestoneScreen,
    interventions: DisabilityInterventionsScreen
  },
  config
);

Disability.navigationOptions = {
  tabBarLabel: "Disability",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-headset" : "md-headset"}
    />
  )
};

Disability.path = "";

const Education = createStackNavigator(
  {
    Education: EducationScreen,
    ld: EducationLdScreen,
    therapy: EducationTherapiesScreen,
    journey: EducationPlScreen,
    PregDetail: PregDetailScreen
  },
  config
);

Education.navigationOptions = {
  tabBarLabel: "Education",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-book" : "md-book"}
    />
  )
};

HomeStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  Current,
  Disability,
  Education
});
tabNavigator.path = "";

export default tabNavigator;
