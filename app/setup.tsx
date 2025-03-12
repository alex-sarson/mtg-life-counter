import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "./components/ui/BackButton";
import PageLayout from "./components/PageLayout";
import NumberInput from "./components/forms/NumberInput";

export default function SetupPage() {
  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>New Game</Text>
        <NumberInput label="Select number of players:" />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 0,
    marginRight: "auto",
    marginLeft: "auto",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
  },
});
