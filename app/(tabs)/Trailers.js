import { Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import ThisBottomSheet from "../../features/bottomsheet";
import colors from "../../assets/colors";
import VideoList from "../../features/videolist/index";
import testData from "../../assets/data/testData";

const Trailers = () => {
  const [trailers, setTrailers] = useState(testData);

  const screenHeight = Dimensions.get("window").height;
  const headerHeight = useHeaderHeight();
  const tabNavigationHeight = 60;
  const adjustedScreenHeight =
    screenHeight - headerHeight - tabNavigationHeight;

  return (
    <>
      <LinearGradient
        colors={[colors.gradient1, colors.gradient2, colors.gradient3]}
        style={styles.container}
      >
        <VideoList
          trailers={trailers}
          adjustedScreenHeight={adjustedScreenHeight}
          screenHeight={screenHeight}
        />
      </LinearGradient>
      <ThisBottomSheet />
    </>
  );
};

export default Trailers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "transparent",
  },
});
