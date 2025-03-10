import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface LifeAlterButtonProps {
  onPressOut?: PressableProps["onPressOut"];
  onPress?: PressableProps["onPress"];
  onLongPress?: PressableProps["onLongPress"];
  name: any;
  size: number;
  color: string;
}

const LifeAlterButton: React.FC<LifeAlterButtonProps> = ({
  onPressOut,
  onPress,
  onLongPress,
  name,
  size,
  color,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
    >
      <FontAwesome name={name} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    padding: 10,
  },
  pressed: {
    // nothing
  },
});

export default LifeAlterButton;
