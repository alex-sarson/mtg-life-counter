import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  label: string;
}

const NumberInput = ({ label }: Props) => {
  const [number, setNumber] = useState(2);
  const handleDecrement = () => {
    setNumber((prev) => prev - 1);
  };
  const handleIncrement = () => {
    setNumber((prev) => prev + 1);
  };
  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.input}>
        <Pressable onPress={handleDecrement} disabled={number <= 2}>
          <FontAwesome name="chevron-left" size={20} />
        </Pressable>
        <Text>{number}</Text>
        <Pressable onPress={handleIncrement} disabled={number >= 4}>
          <FontAwesome name="chevron-right" size={20} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
  },
  text: {},
});

export default NumberInput;
