import React, { PropsWithChildren } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import BackButton from "./ui/BackButton";

type Props = PropsWithChildren<{
  backButton: boolean;
  style?: any;
}>;

const PageLayout = ({ children, backButton, style }: Props) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={[style, styles.container, { width: width, height: height }]}>
      {backButton ? <BackButton /> : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#16161f",
  },
});

export default PageLayout;
