import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

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
          backgroundColor: "#201F1F",
          borderTopWidth: 2,
          borderColor: "#222222",
          height: 60,
          paddingBottom: 7,
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FF6347",
        inactiveTintColor: "#ADA5A5",
      }}
    >
      <Tabs.Screen name="Trailers" options={{ headerShown: false }} />
      <Tabs.Screen name="Saved" options={{ headerShown: false }} />
    </Tabs>
  );
};
