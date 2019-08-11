import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { List, ListItem, Left, Right, Icon } from "native-base";
import PregDetailScreen from "./PregDetailScreen";
import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

const journey = [
  {
    title: "Before Pregnancy",
    list1:
      "Preconception checkup: Make sure you are in good health when pregnant",
    list2: "Check for infections: Testing and treatment highly advised",
    list3:
      "Vaccination: Make sure you are up to date with all your vaccinations"
  },
  {
    title: "During Pregnancy",
    list1: "Prenatal care checkups: Make sure to go for regular checkups",
    list2:
      "Possible infections/virus during pregnancy: Toxoplasma, rubella, measles, syphilis, cytomegalovirus, herpes 1 and herpes 2",
    list3:
      "Harmful drugs to be avoided: Streptomycin, tobramycin, quinine/chloroquine, thalidomide, and gentamicin"
  },
  {
    title: "After Pregnancy",
    list1: "Keep baby away from loud sounds",
    list2: "Make sure to bring your child for regular checkups",
    list3: "If your child has an ear infection, go for a treatment immediately"
  },
  {
    title: "Premature Birth",
    list1:
      "Low birthweight/premature birth may cause health problems such as hearing loss. Learn more about the precautions needed to avoid risks of premature birth below."
  },
  {
    title: "Basic Precautions",
    list1: "Keep hands clean at all times",
    list2: "Avoid undercooked meat, smoking, and drinking",
    list3: "Have safe sex"
  }
];

function showjourney(props, journey) {
  props.navigation.push("PregDetail", { journey: journey });
}
export default function EducationPlScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <List>
          {journey.map(journey => {
            return (
              <ListItem
                key={journey.title}
                onPress={() => {
                  showjourney(props, journey);
                }}
              >
                <Left>
                  <Text style={styles.title}>{journey.title}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            );
          })}
        </List>
      </View>
    </ScrollView>
  );
}

EducationPlScreen.navigationOptions = {
  title: "Pregnancy Journey",
  headerStyle: {
    backgroundColor: "#a794ff"
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 18
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender"
  },
  title: {
    fontSize: 20
  }
});
