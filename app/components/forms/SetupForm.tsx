import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import NumberControlButton from "../ui/NumberControlButton";

interface Props {
  label: string;
}

interface RadioNumbersProps {
  number: number;
  disabled: boolean;
  onPress?: PressableProps["onPress"];
}

// TODO: Move into a complete setup form, so that on submit I can pass the number value to the game screen.

const SetupForm = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [radioPressed, setRadioPressed] = useState(2);

  const handleRadioPress = (number: number) => {
    setNumberOfPlayers(number);
    setRadioPressed(number);
  };

  const data = {
    players: numberOfPlayers,
  };

  return (
    <View>
      <Text>Select number of players:</Text>
      <View style={styles.radioNumbersContainer}>
        {[2, 3, 4].map((number, index) => (
          <RadioNumber
            number={number}
            key={index}
            onPress={() => handleRadioPress(number)}
            disabled={number === radioPressed}
          />
        ))}
      </View>
    </View>
  );
};

const RadioNumber = ({ number, disabled, onPress }: RadioNumbersProps) => (
  <Pressable
    style={[
      styles.radioNumber,
      disabled ? styles.radioNumberDisabled : styles.radioNumberActive,
    ]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.radioNumberText}>{number}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  input: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
  },
  radioNumbersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioNumber: {
    borderRadius: "50%",
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  radioNumberText: {
    color: "white",
    fontSize: 20,
  },
  radioNumberActive: {
    backgroundColor: "grey",
  },
  radioNumberDisabled: {
    backgroundColor: "green",
  },
});

export default SetupForm;
