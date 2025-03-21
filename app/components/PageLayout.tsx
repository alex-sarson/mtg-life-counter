import React, { PropsWithChildren } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import BackButton from "./ui/BackButton";

type Props = PropsWithChildren<{}>;

const PageLayout = ({ children }: Props) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ width: width, height: height }}>
      <BackButton />
      {children}
    </View>
  );
};

export default PageLayout;
