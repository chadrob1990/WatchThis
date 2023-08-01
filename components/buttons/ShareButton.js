import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const ShareButton = (props) => {
  const [sharing, setSharing] = useState(false);

  //   Move to utilities
  const handleShare = async (item) => {
    setSharing(!sharing);
    if (!sharing) {
      console.log("Sharing");
    } else {
      console.log("Not Sharing");
    }
  };

  return (
    <TouchableOpacity onPress={() => handleShare(props.item)}>
      <Ionicons name={"share-outline"} size={props.size} color={"white"} />
      {/* <FontAwesome name="share" size={props.size} color="white" /> */}
    </TouchableOpacity>
  );
};

export default ShareButton;
