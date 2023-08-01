import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const VideoPlayer = (props) => {
  const currentOS = Platform.OS;

  return (
    <View style={styles.container}>
      <View style={styles.trailerContainer}>
        {currentOS === "web" ? (
          <iframe
            style={styles.iframe}
            src={"https://www.youtube.com/embed/uYPbbksJxIg"}
            allowFullScreen
            frameBorder="0"
          />
        ) : (
          <WebView
            source={{ uri: "https://www.youtube.com/embed/uYPbbksJxIg" }}
          />
        )}
      </View>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    maxWidth: 950,
  },
  trailerContainer: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
    marginTop: 40,
    alignSelf: "center",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
});
