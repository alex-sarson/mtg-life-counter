import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberControlButton from "./ui/NumberControlButton";

interface Props {
  colour: string;
  startingLife: number;
}

export default function Player({ colour = "grey", startingLife }: Props) {
  const [life, setLife] = useState<number>(startingLife);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const gainLife = (): void => {
    setLife(life + 1);
  };
  const loseLife = (): void => {
    setLife(life - 1);
  };

  const handleLongLose10 = (): void => {
    intervalRef.current = setInterval(() => {
      setLife((prevLife) => {
        const newValue = prevLife - 10;
        return newValue;
      });
    }, 300);
  };

  const handleLongGain10 = (): void => {
    intervalRef.current = setInterval(() => {
      setLife((prevLife) => {
        const newValue = prevLife + 10;
        return newValue;
      });
    }, 300);
  };

  const handleRelease = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <View
      style={[
        styles.container,
        colour === "green"
          ? styles.green
          : colour === "blue"
          ? styles.blue
          : colour === "red"
          ? styles.red
          : colour === "black"
          ? styles.black
          : colour === "white"
          ? styles.white
          : styles.grey,
      ]}
    >
      <NumberControlButton
        name="minus"
        size={30}
        color="white"
        onPress={loseLife}
        onLongPress={handleLongLose10}
        onPressOut={handleRelease}
        disabled={false}
      />
      <Text style={[styles.life]}>{life}</Text>
      <NumberControlButton
        name="plus"
        size={30}
        color="white"
        onPress={gainLife}
        onLongPress={handleLongGain10}
        onPressOut={handleRelease}
        disabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
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
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
  red: {
    backgroundColor: "red",
  },
  white: {
    backgroundColor: "white",
  },
  black: {
    backgroundColor: "black",
  },
  grey: {
    backgroundColor: "grey",
  },
});
