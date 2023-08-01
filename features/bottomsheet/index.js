import React, { useRef, useState, useEffect, useContext } from "react";
import { Modalize } from "react-native-modalize";
import ActionSheet, {
  useScrollHandlers,
  ActionSheetRef,
  SheetProps,
} from "react-native-actions-sheet";
import { BottomSheet } from "react-spring-bottom-sheet";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AppContext } from "../../app/_layout";
import VideoDetails from "./components/videodetails/index";
export const actionSheetRef = React.useRef(null);
export const modalizeRef = React.useRef(null);

const ThisBottomSheet = () => {
  const context = useContext(AppContext);

  const setContnet = () => {
    console.log(context.bottomSheetType);
    console.log(context.bottomSheetContent);
  };

  return (
    <>
      {/* <ActionSheet
        onOpen={() => setContnet()}
        ref={actionSheetRef}
        gestureEnabled={true}
        snapPoints={[50, 100]}
      > */}
      <Modalize ref={modalizeRef} snapPoint={580}>
        {/* <Text style={{ height: 500 }}>{context.bottomSheetType}</Text> */}
        {context.bottomSheetType == "video" ? (
          // <ScrollView
          //   style={styles.scrollView}
          //   showsHorizontalScrollIndicator={false}
          // >
          <VideoDetails item={context.bottomSheetContent} />
        ) : (
          // </ScrollView>
          <></>
        )}
        {/* </ActionSheet> */}
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default ThisBottomSheet;
