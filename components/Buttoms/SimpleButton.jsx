import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { theme } from "../../utils/constants";

export default function SimpleButton({ onPress, ...props }) {
  return (
    <TouchableOpacity
      onPressOut={onPress}
      style={[styles.touchable, props.style]}
    >
      <Text style={{ color: 'white' }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: "#084ccb",
    borderRadius: theme.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
  },
})
