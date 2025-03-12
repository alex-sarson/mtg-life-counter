import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={[styles.container]}>
      <Link href="/menu" asChild style={[styles.settings]}>
        <Pressable>
          <Text>Menu</Text>
        </Pressable>
      </Link>
      <Text>This is the home screen</Text>
      <Link href="/setup" asChild>
        <Pressable>
          <Text>Start Game</Text>
        </Pressable>
      </Link>
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
});
