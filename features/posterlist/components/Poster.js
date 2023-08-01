import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { openBottomSheet } from "../../bottomsheet/utils/openBottomSheet";
import { AppContext } from "../../../app/_layout";

const Poster = (props) => {
  const context = useContext(AppContext);
  const [poster, setPoster] = useState(null);
  let item = props.item;

  useEffect(() => {
    fetchPoster();
  }, []);

  const fetchPoster = () => {
    //For testing
    setPoster(props.item._images.movieposter);
  };

  const setBottomSheet = () => {
    context.setBottomSheetType("video");
    context.setBottomSheetContent(item);
    // context.setOpen(true);
  };

  // Calculate the width and height of each poster dynamically based on the screen size
  const windowDimensions = useWindowDimensions();
  const posterWidth = (windowDimensions.width - 8 * 4) / 3;
  const posterHeight = (posterWidth / 2) * 3; // Assuming the aspect ratio of the poster is 2:3

  return (
    <TouchableOpacity
      type="submit"
      onPress={() => [setBottomSheet(), openBottomSheet()]}
    >
      <Image
        source={{ uri: "" + poster }}
        style={[styles.image, { width: posterWidth, height: posterHeight }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    opacity: 1,
    margin: 2,
    borderRadius: 3,
    maxWidth: 200, // Set the maximum width for each poster
    maxHeight: 300, // Set the maximum height for each poster
  },
});

export default Poster;
