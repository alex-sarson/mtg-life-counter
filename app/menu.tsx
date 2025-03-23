import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PageLayout from "./components/PageLayout";

export default function MenuScreen() {
  return (
    <PageLayout backButton={false} style={{ gap: 15 }}>
      <Text onPress={() => router.back()} style={styles.text}>
        Resume
      </Text>
      <Link href="/setup" asChild>
        <Pressable>
          <Text style={styles.text}>New Game</Text>
        </Pressable>
      </Link>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  settings: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  text: {
    fontSize: 20,
  },
});
