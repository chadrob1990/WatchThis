import React, { createContext, useState } from "react";
import { Stack } from "expo-router";
export const AppContext = React.createContext();

const StackLayout = () => {
  const [bottomSheetType, setBottomSheetType] = useState(null);
  const [bottomSheetContent, setBottomSheetContent] = useState(null);
  //   const [open, setOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        bottomSheetType,
        setBottomSheetType,
        bottomSheetContent,
        setBottomSheetContent,
        // open,
        // setOpen,
      }}
    >
      <Stack
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "black" },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AppContext.Provider>
  );
};

export default StackLayout;
