import { Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../assets/colors";
import VideoPlayerUI from "../../features/videoplayer/index";

const Trailers = () => {
  return (
    <LinearGradient
      colors={[colors.gradient1, colors.gradient2, colors.gradient3]}
      style={styles.container}
    >
      <VideoPlayerUI />
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
