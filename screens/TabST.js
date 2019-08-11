import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";

export default function TabHA() {
  return (
    <View>
      <ScrollView>
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
          <CardItem bordered>
            <Text>
              Children end up mute, will find it harder to socialise with
              others, and end up going to a special school
            </Text>
          </CardItem>
          <CardItem bordered>
            <Text>Listening device will not be much of a use</Text>
          </CardItem>
        </Card>
      </ScrollView>
    </View>
  );
}
