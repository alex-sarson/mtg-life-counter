import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface NumberControlButtonProps {
  onPressOut?: PressableProps["onPressOut"];
  onPress?: PressableProps["onPress"];
  onLongPress?: PressableProps["onLongPress"];
  name: any;
  size: number;
  color: string;
  disabled: boolean;
}

const NumberControlButton: React.FC<NumberControlButtonProps> = ({
  onPressOut,
  onPress,
  onLongPress,
  name,
  size,
  color,
  disabled,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      <FontAwesome
        name={name}
        size={size}
        color={color}
        style={{ lineHeight: 0 }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF19",
    padding: 15,
    paddingTop: 27,
    paddingBottom: 25,
    borderRadius: 10,
  },
  pressed: {
    // nothing
  },
});

export default NumberControlButton;
