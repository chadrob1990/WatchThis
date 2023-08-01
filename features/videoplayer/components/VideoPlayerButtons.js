import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SaveButton from "../../../components/buttons/SaveButton";
// import ShareButton from "../../../components/buttons/ShareButton";

const VideoPlayerButtons = (props) => {
  return (
    <View style={styles.container}>
      <SaveButton size={35} item={"Test"} />
      {/* <Text style={styles.buttonText}>{props.videolikes}</Text> */}
      {/* <ShareButton size={35} item={"Test"} />
      <Text style={styles.buttonText}>Share</Text> */}
    </View>
  );
};

export default VideoPlayerButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "white",
    fontStyle: "italic",
    justifyContent: "center",
    // paddingBottom: 20,
    paddingTop: 7,
  },
});
