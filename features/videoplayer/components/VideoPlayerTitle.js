import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { openBottomSheet } from "../../bottomsheet/utils/openBottomSheet";
import { AppContext } from "../../../app/_layout";

const VideoPlayerTitle = (props) => {
  const context = useContext(AppContext);

  const setBottomSheet = () => {
    context.setBottomSheetType("video");
    context.setBottomSheetContent(props.item);
    console.log(props.item);
    // context.setOpen(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        type="submit"
        onPress={() => [setBottomSheet(), openBottomSheet()]}
      >
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.text}>{props.releasedate}</Text>
      </TouchableOpacity>
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
