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
          if (item.id) {
            return item.id.toString();
          } else if (item.ids) {
            return item.ids.trakt.toString();
          }
          // Return a default key if neither item.id nor item.ids.trakt is present
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
