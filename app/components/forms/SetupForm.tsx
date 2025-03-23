import React, { useState } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";

interface RadioNumbersProps {
  number: number;
  disabled: boolean;
  onPress?: PressableProps["onPress"];
}

const SetupForm = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [nopPressed, setNopPressed] = useState(2);
  const [lifeTotal, setLifeTotal] = useState(20);
  const [lifePressed, setLifePressed] = useState(20);

  const handleNumberOfPlayers = (number: number) => {
    setNumberOfPlayers(number);
    setNopPressed(number);
  };

  const handleLifeTotalPressed = (number: number) => {
    setLifeTotal(number);
    setLifePressed(number);
  };

  const data = {
    players: numberOfPlayers,
    startingLife: lifeTotal,
  };

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.label}>Select number of players:</Text>
        <View style={styles.radioNumbersContainer}>
          {[2, 3, 4].map((number, index) => (
            <RadioNumber
              number={number}
              key={index}
              onPress={() => handleNumberOfPlayers(number)}
              disabled={number === nopPressed}
            />
          ))}
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Select starting life:</Text>
        <View style={styles.radioNumbersContainer}>
          {[20, 30, 40].map((number, index) => (
            <RadioNumber
              number={number}
              key={index}
              onPress={() => handleLifeTotalPressed(number)}
              disabled={number === lifePressed}
            />
          ))}
        </View>
      </View>
      <View style={styles.row}>
        <Link
          href={`/game?players=${encodeURIComponent(
            data.players
          )}&life=${encodeURIComponent(data.startingLife)}`}
          asChild
        >
          <Pressable>
            <Text style={styles.start}>Start Game</Text>
          </Pressable>
        </Link>
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
  row: {
    marginTop: 15,
    marginBottom: 15,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
  },
  label: {
    marginBottom: 10,
    color: "white",
  },
  start: {
    backgroundColor: "#4c599d",
    textAlign: "center",
    borderRadius: 4,
    padding: 10,
    color: "white",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
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
    backgroundColor: "#37374e",
  },
  radioNumberDisabled: {
    backgroundColor: "#4c599d",
    boxShadow: "0px 0px 6px #4c599d",
  },
});

export default SetupForm;
