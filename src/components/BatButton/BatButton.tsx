import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {styles} from "./BatButtonStyle";


export default function BatButton() {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>Press Me</Text>
    </View>
  );
}
