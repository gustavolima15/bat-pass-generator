import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./Style"; // Assuming Style.tsx is in the same directory
import { BatLogo } from "../../components/BatLogo/BatLogo";


export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
    </View>
  );
}
