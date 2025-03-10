import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

interface MenuButtonProps {
  color: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ color }) => {
  return (
    <Link href="/menu" asChild style={styles.nav}>
      <Pressable>
        <FontAwesome name="navicon" size={30} color={color} />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
    opacity: 0.5,
  },
});

export default MenuButton;
