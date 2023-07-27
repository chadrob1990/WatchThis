import { View, StyleSheet } from "react-native";
import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoPlayerTitle from "./components/VideoPlayerTitle";
import VideoPlayerButtons from "./components/VideoPlayerButtons";

const VideoPlayerUI = () => {
  return (
    <View style={styles.container}>
      <VideoPlayer
        uri={"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}
      />
      <View style={styles.buttonsContainer}>
        <VideoPlayerButtons likes={6452} />
      </View>
      <View style={styles.titleContainer}>
        <VideoPlayerTitle title={"Oppenheimer"} date={"July 21, 2023"} />
      </View>
    </View>
  );
};

export default VideoPlayerUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  titleContainer: {
    position: "absolute",
    bottom: 30,
    left: 30,
  },
});
