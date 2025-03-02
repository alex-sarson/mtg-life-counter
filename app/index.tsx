import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Text>This is the homepage</Text>
      <Link href="/settings" asChild>
        <Pressable>
          <Text>Settings</Text>
        </Pressable>
      </Link>
    </View>
  );
}
