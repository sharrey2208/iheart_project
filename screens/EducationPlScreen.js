import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { List, ListItem, Left, Right, Icon } from "native-base";
import PregDetailScreen from "./PregDetailScreen";
import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

const journey = [
  {
    title: "Before Pregnancy",
    list1: "1) Preconception checkup: ",
    list11: "Make sure you are in good health when pregnant",
    list2: "2) Check for infections: ",
    list22: "Testing and treatment highly advised",
    list3: "3) Vaccination: ",
    list33: "Make sure you are up to date with all your vaccinations"
  },
  {
    title: "During Pregnancy",
    list1: "1) Prenatal care checkups: ",
    list11: "Make sure to go for regular checkups",
    list2: "2) Possible infections/virus during pregnancy: ",
    list22:
      "Toxoplasma, rubella, measles, syphilis, cytomegalovirus, herpes 1 and herpes 2",
    list3: "3) Harmful drugs to be avoided: ",
    list33:
      "Streptomycin, tobramycin, quinine/chloroquine, thalidomide, and gentamicin"
  },
  {
    title: "After Pregnancy",
    list1: "1) Keep baby away from loud sounds",
    list11: "",
    list2: "2) Make sure to bring your child for regular checkups",
    list22: "",
    list3:
      "3) If your child has an ear infection, go for a treatment immediately",
    list33: ""
  },
  {
    title: "Premature Birth",
    list1:
      "Babies born prematurely have higher risks of health problems, such as hearing loss, than babies born on time. A baby will need about 40 weeks in the womb to fully grow and develop before birth, and a premature birth/preterm labor occurs before 37-weeks of pregnancy. Women who are pregnant during the ages of 17 below, and 35 above have higher risks of giving birth early. ",
    list11:
      "A transvaginal ultrasound is advised so that your provider may give you treatment to help prevent the early birth. Learn more about the precautions needed to avoid risks of and symptoms of premature birth below. ",
    list2: "1) Symptoms of Preterm Labor:",
    list22:
      "Change in/more vaginal discharge than usual, occasional contractions that may/may not be painful, pressure in pelvis/lower belly, and your water breaks.",
    list3: "2) Risks of Preterm Labor:",
    list33:
      "You’ve had a premature baby in the past, pregnant with more than one baby, and problems with uterus/cervix in the past"
  },
  {
    title: "Basic Precautions",
    list1: "1) Keep a healthy weight before and during pregnancy",
    list11:
      "Discuss with your provider a healthy plan for you. An extra 300 calories is just right for your baby to grow and develop.",
    list2:
      "2) Keep hands clean at all times, and avoid undercooked meat, smoking, drinking, and use of drugs ",
    list22: "Join programs to help yourself quit",
    list3:
      "3) Have safe sex and wait at least 18-months between giving birth and getting pregnant again",
    list33: "Use birth control pills until you are ready to be pregnant again"
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
