import React, { useState, useCallback, useRef } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
// import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoPlayer = (props) => {
  const currentOS = Platform.OS;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      {currentOS === "web" ? (
        <View style={styles.webTrailerContainer}>
          <iframe
            style={styles.iframe}
            src={"https://www.youtube.com/embed/" + props.videoid}
            allowFullScreen
            frameBorder="0"
          />
        </View>
      ) : (
        // <WebView
        //   source={{ uri: "https://www.youtube.com/embed/" + props.videoid }}
        //   originWhitelist={["*"]}
        //   javaScriptEnabled={true}
        // />
        <View style={styles.mobileTrailerContainer}>
          <YoutubePlayer
            color="white"
            useLocalHTML={true}
            height={300}
            play={playing}
            videoId={props.videoid}
            onChangeState={onStateChange}
          />
          {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
        </View>
      )}
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
  webTrailerContainer: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
    alignSelf: "center",
  },
  mobileTrailerContainer: {
    flex: 1,
    width: "100%",
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
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
