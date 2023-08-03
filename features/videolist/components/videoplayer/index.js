import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoPlayerTitle from "./components/VideoPlayerTitle";
import VideoPlayerButtons from "./components/VideoPlayerButtons";

const VideoPlayerUI = (props) => {
  let item = props.item.item;
  const [thisreleasedate, setThisreleasedate] = useState();
  const [youtubeid, setYoutubeid] = useState();

  useEffect(() => {
    if (item) {
      if (item.trailer) {
        setYoutubeid(item.trailer.split("watch?v=").pop());
      }
      if (item.released) {
        formatDate(item.released);
      }
    }
  }, [props.item]);

  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    setThisreleasedate(dateObj.toLocaleDateString(undefined, options));
  }

  return (
    <>
      {youtubeid ? (
        <View
          style={[
            styles.container,
            { height: props.adjustedScreenHeight, width: "100%" },
          ]}
        >
          <VideoPlayer videoid={youtubeid} />
          <View style={styles.buttonsContainer}>
            {item.votes ? (
              <VideoPlayerButtons videolikes={item.votes} />
            ) : (
              <></>
            )}
          </View>
          <View style={styles.titleContainer}>
            {item.title ? (
              <VideoPlayerTitle
                title={item.title}
                releasedate={thisreleasedate}
              />
            ) : (
              <></>
            )}
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default VideoPlayerUI;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    // flex: 1,
    // width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "transparent",
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
