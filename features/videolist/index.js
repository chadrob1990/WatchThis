import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import VideoPlayerUI from "./components/videoplayer/index";

const VideoList = (props) => {
  const [trailers, setTrailers] = useState([]);
  const [lastScroll, setLastScroll] = useState(0);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(false);

  useEffect(() => {
    if (Array.isArray(props.trailers) && props.trailers.length > 0) {
      setTrailers(props.trailers);
      //   setTrailers([props.trailers[0]]);
    }
  }, [props.trailers]);

  //   // Calculate the target offset for a specific index
  //   const getTargetOffsetForIndex = (index) => {
  //     return index * props.adjustedScreenHeight;
  //   };

  //   const onScroll = ({
  //     nativeEvent: {
  //       contentOffset: { y: scrollOffset },
  //     },
  //   }) => {
  //     if (autoScroll == false) {
  //       if (lastScroll - scrollOffset > 0) {
  //         // Scrolling up
  //         setCurrentIndex(currentIndex - 1);
  //       } else {
  //         // Scrolling down
  //         setCurrentIndex(currentIndex + 1);
  //       }
  //       flatListRef.current.scrollEnabled = false;
  //       setAutoScroll(true);
  //       setLastScroll(scrollOffset);
  //       scrollToIndex(currentIndex);
  //       setTimeout(function () {
  //         setAutoScroll(false);
  //         flatListRef.current.scrollEnabled = true;
  //       }, 3000);
  //     }
  //   };

  //   // Scroll to the target index with animated set to true
  //   const scrollToIndex = (index) => {
  //     flatListRef.current.scrollToIndex({
  //       index,
  //       animated: true,
  //     });
  //   };

  //   // Calculate the item layout for the getItemLayout prop
  //   const getItemLayout = (_, index) => ({
  //     length: props.adjustedScreenHeight,
  //     offset: props.adjustedScreenHeight * index,
  //     index,
  //   });

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        decelerationRate="fast"
        snapToInterval={props.adjustedScreenHeight}
        snapToAlignment="start"
        numColumns={1}
        data={trailers}
        renderItem={(item) => {
          return (
            <VideoPlayerUI
              item={item}
              adjustedScreenHeight={props.adjustedScreenHeight}
              screenHeight={props.screenHeight}
            />
          );
        }}
        keyExtractor={(item, index) => {
          if (item._ids && item._ids.trakt) {
            return item._ids.trakt.toString();
          } else if (item.title) {
            return item.title.toString();
          }
          return index;
        }}
        showsVerticalScrollIndicator={false}
        extraData={trailers}
        ListEmptyComponent={<></>}
      />
    </View>
  );
};

export default VideoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "transparent",
  },
});

// onScroll={onScroll}
// getItemLayout={getItemLayout}
