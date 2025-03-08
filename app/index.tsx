import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Player from "./components/Player";

export default function HomeScreen() {
  return (
    <View style={[styles.container]}>
      <Link href="/settings" asChild style={[styles.settings]}>
        <Pressable>
          <Text>Settings</Text>
        </Pressable>
      </Link>
      <View style={[styles.playerWrapper, styles.invert]}>
        {/* player's 1/1&2 */}
        <Player colour="green" />
        <Player colour="blue" />
      </View>
      <View style={[styles.playerWrapper]}>
        {/* player's 2/3&4 */}
        <Player />
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
