import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

const BackButton: React.FC = () => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <FontAwesome name="arrow-left" size={30} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 2,
    opacity: 0.5,
  },
});

export default BackButton;
