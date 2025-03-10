import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function MenuScreen() {
  return (
    <View style={[styles.container]}>
      <Text onPress={() => router.back()}>Go back</Text>
      <Link href="/setup" asChild>
        <Pressable>
          <Text>New Game</Text>
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
