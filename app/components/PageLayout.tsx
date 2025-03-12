import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import BackButton from "./ui/BackButton";

type Props = PropsWithChildren<{}>;

const PageLayout = ({ children }: Props) => {
  return (
    <View style={styles.main}>
      <BackButton />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
});

export default PageLayout;
