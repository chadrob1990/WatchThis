import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NoList = () => {
  return (
    <View style={styles.center}>
      <View>
        <Text style={styles.emoji}>🍿</Text>
        <Text style={styles.noListText}>Saved movies will appear here.</Text>
      </View>
    </View>
  );
};

export default NoList;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    margin: "auto",
    flex: 1,
  },
  noListText: {
    fontSize: 17,
    color: "white",
  },
  emoji: {
    fontSize: 45,
    paddingBottom: 30,
    alignSelf: "center",
  },
});
