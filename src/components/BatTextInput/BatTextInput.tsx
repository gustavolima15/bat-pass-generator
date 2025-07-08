import React from "react";
import { TextInput } from "react-native";

import { styles } from "./BatTextInputStyles";

interface BatTextInputProps {
  placeholder?: string;
}

export function BatTextInput({ placeholder }: BatTextInputProps) {
  return (

      <TextInput style={styles.input} placeholder={placeholder}  />

  );
}