import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { AppContext } from "../../../app/_layout";

const Poster = (props) => {
  const navigation = useRouter();
  const context = useContext(AppContext);
  const [poster, setPoster] = useState(null);
  let item = props.item;

  useEffect(() => {
    fetchPoster();
  }, []);

  const fetchPoster = () => {
    setPoster(props.item._images.movieposter);
  };

  const setBottomSheet = () => {
    context.setBottomSheetType("video");
    context.setBottomSheetContent(item);
  };

  // Calculate the width and height of each poster dynamically based on the screen size
  const windowDimensions = useWindowDimensions();
  let posterWidth;
  let posterHeight;

  if (windowDimensions.height > 400) {
    posterWidth = (windowDimensions.width - 8 * 4) / 3;
    posterHeight = (posterWidth / 2) * 3; // Assuming the aspect ratio of the poster is 2:3
  } else {
    const scaleFactor = 0.7;
    posterWidth = ((windowDimensions.width - 8 * 4) / 3) * scaleFactor;
    posterHeight = (posterWidth / 2) * 3; // Assuming the aspect ratio of the poster is 2:3
  }

  return (
    <TouchableOpacity
      type="submit"
      onPress={() => [setBottomSheet(), navigation.push("/details")]}
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
    margin: 4,
    borderRadius: 3,
    maxWidth: 200, // Set the maximum width for each poster
    maxHeight: 300, // Set the maximum height for each poster
  },
});

export default Poster;
