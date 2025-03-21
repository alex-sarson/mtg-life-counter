import React, { PropsWithChildren, useRef, useState } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import NumberControlButton from "./ui/NumberControlButton";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  startingLife: number;
}

interface SettingsButtonProps {
  style: any;
  onPress?: PressableProps["onPress"];
  toggle: boolean;
}

export default function Player({ startingLife }: Props) {
  const [life, setLife] = useState<number>(startingLife);
  const [showPlayerSettings, setShowPlayerSettings] = useState<boolean>(false);
  const [colour, setColour] = useState<string>("#848484");
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

  const toggleSettings = (): void => {
    setShowPlayerSettings((prev) => !prev);
  };

  let playerData = {
    colour: colour,
    currentLife: life,
  };

  let colours = {
    black: "#848484",
    white: "#f3e39d",
    green: "#94c776",
    blue: "#7fc1e9",
    red: "#e05353",
    pink: "#eb67d3",
    lilac: "#a061d4",
  };

  return (
    <>
      <View style={[styles.container, { backgroundColor: colour }]}>
        <View
          style={[
            styles.settings,
            !showPlayerSettings ? styles.settingsHide : null,
          ]}
        >
          <View style={styles.coloursWrapper}>
            {Object.entries(colours).map(([key, value], index) => (
              <Pressable
                key={index}
                style={[
                  styles.colourButton,
                  {
                    backgroundColor: value,
                    borderColor: colour === value ? "white" : value,
                  },
                ]}
                onPress={() => setColour(value)}
              />
            ))}
          </View>
        </View>
        <SettingsButton
          style={styles.settingsButton}
          onPress={toggleSettings}
          toggle={!showPlayerSettings}
        />
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
    </>
  );
}

const SettingsButton = ({ style, onPress, toggle }: SettingsButtonProps) => {
  return (
    <Pressable style={style} onPress={onPress}>
      {toggle ? (
        <FontAwesome name="cog" color="white" size={30} />
      ) : (
        <FontAwesome name="close" color="white" size={32} />
      )}
    </Pressable>
  );
};

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
    borderWidth: 1,
    borderColor: "#16161f",
    borderStyle: "solid",
  },
  coloursWrapper: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    gap: 15,
  },
  colourButton: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    borderWidth: 3,
    borderStyle: "solid",
  },
  life: {
    fontSize: 120,
    color: "white",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 40,
    marginRight: 40,
  },
  settings: {
    backgroundColor: "#16161f",
    position: "absolute",
    zIndex: 3,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.85,
  },
  settingsHide: {
    display: "none",
  },
  settingsButton: {
    position: "absolute",
    top: 10,
    right: 10,
    opacity: 0.5,
    zIndex: 4,
  },
});
