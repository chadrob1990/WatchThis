import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../assets/colors";

export default () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Saved") {
            iconName = focused ? "list" : "list";
          } else if (route.name === "Trailers") {
            iconName = focused ? "film-outline" : "film-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: colors.bottomTabBarBackground,
          borderTopWidth: 1,
          borderTopColor: colors.bottomTabBarBorder,
          height: 60,
          paddingBottom: 7,
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.maintheme,
        inactiveTintColor: colors.tabIconInactive,
      }}
    >
      <Tabs.Screen name="Trailers" options={{ headerShown: false }} />
      <Tabs.Screen name="Saved" options={{ headerShown: false }} />
    </Tabs>
  );
};
