import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LifeAlterButton from "./ui/LifeAlterButton";

export default function Player() {
  const [life, setLife] = useState<number>(40);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const gainLife = () => {
    setLife(life + 1);
  };
  const loseLife = () => {
    setLife(life - 1);
  };

  const handleLongLose10 = () => {
    intervalRef.current = setInterval(() => {
      setLife((prevLife) => {
        const newValue = prevLife - 10;
        return newValue;
      });
    }, 300);
  };

  const handleLongGain10 = () => {
    intervalRef.current = setInterval(() => {
      setLife((prevLife) => {
        const newValue = prevLife + 10;
        return newValue;
      });
    }, 300);
  };

  const handleRelease = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <View style={[styles.container]}>
      <LifeAlterButton
        name="minus"
        size={30}
        color="white"
        onPress={loseLife}
        onLongPress={handleLongLose10}
        onPressOut={handleRelease}
      />
      <Text style={[styles.life]}>{life}</Text>
      <LifeAlterButton
        name="plus"
        size={30}
        color="white"
        onPress={gainLife}
        onLongPress={handleLongGain10}
        onPressOut={handleRelease}
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
