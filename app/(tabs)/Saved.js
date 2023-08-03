import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import PosterList from "../../features/posterlist/index";
import testData from "../../assets/data/testData";

const Saved = () => {
  const [saved, setSaved] = useState(testData);

  return (
    <>
      <LinearGradient
        colors={[colors.gradient2, colors.gradient1, colors.gradient3]}
        style={styles.container}
      >
        <PosterList list={saved} />
      </LinearGradient>
    </>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
