import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { AppContext } from "./_layout";
import VideoDetails from "../features/videodetails/index";

const Details = () => {
  const context = useContext(AppContext);

  return (
    <>
      {context.bottomSheetType == "video" ? (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <VideoDetails item={context.bottomSheetContent} />
          </ScrollView>
        </SafeAreaView>
      ) : (
        <></>
      )}
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
