import { Text, View, type ViewProps } from "react-native";

export type PlayerProps = ViewProps & {
  player?: number;
};

export default function Player({ player }: PlayerProps) {
  return (
    <View
      style={{
        backgroundColor: "green",
        height: "100%",
        width: "100%",
      }}
    >
      <Text>This is player {player}</Text>
    </View>
  );
}
