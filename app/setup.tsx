import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "./components/ui/BackButton";
import PageLayout from "./components/PageLayout";
import SetupForm from "./components/forms/SetupForm";

export default function SetupPage() {
  return (
    <PageLayout backButton>
      <View style={styles.container}>
        <Text style={styles.title}>New Game</Text>
        <SetupForm />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
    marginRight: "auto",
    marginLeft: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#282839",
    borderRadius: 10,
    padding: 10,
    boxShadow: "2px 2px 10px #282839",
    backgroundColor: "#242433",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "white",
  },
});
