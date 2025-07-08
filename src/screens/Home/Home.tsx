import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./Style"; // Assuming Style.tsx is in the same directory
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";


export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
    </View>
  );
}
