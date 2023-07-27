import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

const Trailers = () => {
  return (
    <LinearGradient
      colors={[
        colors.gradient1,
        colors.gradient2,
        colors.gradient3,
        colors.gradient4,
      ]}
      style={styles.container}
    >
      <Text style={styles.text}>Trailers</Text>
      {/* Video Player Component*/}
      {/* Video Title Card Component*/}
      {/* Video Buttons Component*/}
    </LinearGradient>
  );
};

export default Trailers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
