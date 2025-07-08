import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./Style"; // Assuming Style.tsx is in the same directory

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
    </View>
  );
}
