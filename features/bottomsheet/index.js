import React from "react";
import { Modalize } from "react-native-modalize";
// import ActionSheet, {
//   useScrollHandlers,
//   ActionSheetRef,
//   SheetProps,
// } from "react-native-actions-sheet";
// import { BottomSheet } from "react-spring-bottom-sheet";
import { StyleSheet } from "react-native";
export const actionSheetRef = React.useRef(null);
export const modalizeRef = React.useRef(null);

const ThisBottomSheet = () => {
  return (
    <>
      <Modalize ref={modalizeRef} modalHeight={200}></Modalize>
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
