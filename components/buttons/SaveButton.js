import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../assets/colors";

const SaveButton = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  //   Move to utilities
  const handleBookmark = async (item) => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      console.log("I liked");
    } else {
      console.log("I unliked");
    }
  };

  return (
    <TouchableOpacity onPress={() => handleBookmark(props.item)}>
      <Ionicons
        name={isLiked == true ? "bookmark" : "bookmark-outline"}
        size={props.size}
        color={isLiked == true ? colors.maintheme : "white"}
      />
    </TouchableOpacity>
  );
};

export default SaveButton;
