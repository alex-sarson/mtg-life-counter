import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Player from "./components/Player";
import MenuButton from "./components/ui/MenuButton";
import { useKeepAwake } from "expo-keep-awake";

export default function GameScreen() {
  useKeepAwake();
  const params = useLocalSearchParams();
  const lifeParam = params.life;
  const playersParam = params.players;

  let lifeString: string | undefined;
  let playersString: string | undefined;

  if (Array.isArray(lifeParam)) {
    lifeString = lifeParam[0];
  } else {
    lifeString = lifeParam;
  }
  if (Array.isArray(playersParam)) {
    playersString = playersParam[0];
  } else {
    playersString = playersParam;
  }

  const data = {
    life: lifeParam ? parseInt(lifeString, 10) : 40,
    players: playersParam ? parseInt(playersString, 10) : 2,
  };

  return (
    <View style={[styles.container]}>
      <MenuButton color="white" />
      <View style={[styles.playerWrapper, styles.invert]}>
        {/* player's 1 / 1&2 */}
        {data.players === 2 ? (
          <Player startingLife={data.life} />
        ) : (
          <>
            <Player startingLife={data.life} />
            <Player startingLife={data.life} />
          </>
        )}
      </View>
      <View style={[styles.playerWrapper]}>
        {/* player's 2 / 3&4 */}
        {data.players !== 4 ? (
          <Player startingLife={data.life} />
        ) : (
          <>
            <Player startingLife={data.life} />
            <Player startingLife={data.life} />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  settings: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
  },
  playerWrapper: {
    display: "flex",
    height: "50%",
    width: "100%",
    flexDirection: "row",
  },
  invert: {
    transform: "rotate(180deg)",
  },
});
