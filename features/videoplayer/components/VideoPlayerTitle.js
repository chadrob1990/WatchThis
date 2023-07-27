import { View, Text, StyleSheet } from "react-native";
import React from "react";

const VideoPlayerTitle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.text}>{props.date}</Text>
    </View>
  );
};

export default VideoPlayerTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  titleText: {
    color: "white",
    fontStyle: "italic",
    fontSize: 17,
    paddingBottom: 4,
  },
  text: {
    color: "white",
    fontStyle: "italic",
    fontSize: 13,
    opacity: "50%",
  },
});
