import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../assets/colors";
import PosterList from "../../features/posterlist/index";

const Saved = () => {
  return (
    <LinearGradient
      colors={[colors.gradient2, colors.gradient1, colors.gradient3]}
      style={styles.container}
    >
      <PosterList />
    </LinearGradient>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
