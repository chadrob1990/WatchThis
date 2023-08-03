import React, { useState } from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import Poster from "./components/Poster";
import NoList from "./components/NoList";

const PosterList = (props) => {
  const [data, setData] = useState(props.list);

  return (
    <View style={styles.savedContainer}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 150, paddingTop: 25 }}
        numColumns={3}
        data={data}
        extraData={data}
        showsVerticalScrollIndicator={false}
        renderItem={(props) => {
          return <Poster {...props} />;
        }}
        ListEmptyComponent={<NoList />}
        keyExtractor={(item) => {
          if (item._ids && item._ids.trakt) {
            return item._ids.trakt.toString();
          } else if (item.title) {
            return item.title.toString();
          }
          return "defaultKey";
        }}
      />
    </View>
  );
};

export default PosterList;

const styles = StyleSheet.create({
  savedContainer: {
    flex: 1,
  },
});
