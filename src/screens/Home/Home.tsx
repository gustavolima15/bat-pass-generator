import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./Style"; // Assuming Style.tsx is in the same directory
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { StatusBar } from "expo-status-bar";
import { BatButton } from "../../components/BatButton/BatButton";


export default function Home() {
  return (
     <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>

      <View style={styles.inputContainer}>
        <BatButton/>
      </View>


      <StatusBar style="light" />
    </View>
  );
}
