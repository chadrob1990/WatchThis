import React, { createContext, useState } from "react";
import { Stack } from "expo-router";
export const AppContext = React.createContext();
import colors from "../assets/colors";

const StackLayout = () => {
  const [bottomSheetType, setBottomSheetType] = useState(null);
  const [bottomSheetContent, setBottomSheetContent] = useState(null);

  return (
    <AppContext.Provider
      value={{
        bottomSheetType,
        setBottomSheetType,
        bottomSheetContent,
        setBottomSheetContent,
      }}
    >
      <Stack
        screenOptions={{
          cardStyle: { backgroundColor: "black" },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="details"
          options={{
            title: "Details",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.header,
            },
            headerTintColor: colors.tabIconInactive,
            headerTitleStyle: {},
          }}
        />
      </Stack>
    </AppContext.Provider>
  );
};

export default StackLayout;
