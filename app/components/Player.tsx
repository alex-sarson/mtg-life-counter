import React, { useState } from "react";
import { StyleSheet, Text, View, type ViewProps } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Player() {
  const [life, setLife] = useState(40);
  const gainLife = () => {
    setLife(life + 1);
  };
  const loseLife = () => {
    setLife(life - 1);
  };
  return (
    <View style={[styles.container]}>
      <FontAwesome.Button
        name="minus"
        size={30}
        color={"white"}
        backgroundColor={"transparent"}
        onPress={loseLife}
      />
      <Text style={[styles.life]}>{life}</Text>
      <FontAwesome.Button
        name="plus"
        size={30}
        color={"white"}
        backgroundColor={"transparent"}
        onPress={gainLife}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "green",
    backgroundColor: "pink",
    height: "100%",
    width: "50%",
    maxWidth: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 0,
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  life: {
    fontSize: 120,
    color: "white",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 40,
    marginRight: 40,
  },
});
