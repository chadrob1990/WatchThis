import React, { useState, useCallback, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Image, Platform, Alert } from "react-native";
// import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";
import colors from "../../assets/colors";
// import CloseButton from "../../../../components/buttons/CloseButton";

const VideoDetails = (props) => {
  const currentOS = Platform.OS;
  const [poster, setPoster] = useState(null);
  const [genres, setGenres] = useState(null);
  const [rating, setRating] = useState(null);
  const [thisrating, setThisrating] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [runtime, setRuntime] = useState(null);
  const [tagline, setTagline] = useState(null);
  const [youtubeid, setYoutubeid] = useState(null);
  const [youtubelink, setYoutubelink] = useState(null);
  const [rottenPercent, setRottenPercent] = useState(null);
  const [playing, setPlaying] = useState(false);
  let item = props.item;

  useEffect(() => {
    fetchDetails();
  }, []);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const fetchDetails = () => {
    if (item) {
      const newRuntime = item.runtime ? item.runtime : null;
      const newGenres = item.genres ? item.genres.join(", ") : null;
      const newThisrating = item.rating ? Math.trunc(item.rating * 10) : null;
      const newRating = newThisrating ? newThisrating + "%" : null;
      const newHours = newRuntime ? Math.floor(newRuntime / 60) : null;
      const newMinutes = newRuntime ? newRuntime % 60 : null;
      const newRuntimeString =
        newHours && newMinutes ? `${newHours}h ${newMinutes}m` : null;
      const newTagline = item.tagline ? item.tagline : null;
      const newYoutubeid = item.trailer
        ? item.trailer.split("watch?v=").pop()
        : null;
      const newYoutubelink = newYoutubeid
        ? `https://www.youtube.com/embed/${newYoutubeid}`
        : null;

      setGenres(newGenres);
      setThisrating(newThisrating);
      setRating(newRating);
      setHours(newHours);
      setMinutes(newMinutes);
      setRuntime(newRuntimeString);
      setTagline(newTagline);
      setYoutubeid(newYoutubeid);
      setYoutubelink(newYoutubelink);

      if (item._images && item._images.movieposter) {
        setPoster(item._images.movieposter);
      } else {
        setPoster(null);
      }
    }
  };

  return (
    <View>
      {!item ? (
        <></>
      ) : (
        <View>
          <View style={styles.itemDetailsContainer}>
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.headerText}
            >
              {item.title}
            </Text>
            <Text style={[styles.genres, { textTransform: "capitalize" }]}>
              {genres}
            </Text>
            {item.trailer ? (
              <View style={styles.trailerContainer}>
                {currentOS == "web" ? (
                  <iframe
                    style={styles.iframe}
                    src={youtubelink}
                    allowFullScreen
                  />
                ) : (
                  <View style={styles.mobileTrailerContainer}>
                    <YoutubePlayer
                      useLocalHTML={true}
                      height={300}
                      play={playing}
                      videoId={youtubeid}
                      onChangeState={onStateChange}
                    />
                  </View>
                )}
              </View>
            ) : (
              <></>
            )}
            <View style={styles.detailsContainer}>
              <View style={styles.genreDetailsContainer}>
                <Text style={styles.title}>
                  Released: <Text style={styles.details}>{item.year}</Text>
                </Text>
              </View>
              <View style={styles.otherDetailsContainer}>
                <Text style={styles.title}>
                  Score:{" "}
                  {rating ? (
                    <Text style={styles.details}>
                      {rating} {"  "}
                    </Text>
                  ) : (
                    <Text style={styles.details}>? </Text>
                  )}
                </Text>
                <Text style={styles.title}>
                  Rating:{" "}
                  {item.certification ? (
                    <Text style={styles.details}>
                      {item.certification} {"  "}
                    </Text>
                  ) : (
                    <Text style={styles.details}>TBD </Text>
                  )}
                </Text>
                <Text style={styles.title}>
                  Runtime: <Text style={styles.details}>{runtime}</Text>
                </Text>
              </View>
            </View>
            {tagline ? (
              <Text style={styles.tagline}>{item.tagline}</Text>
            ) : (
              <></>
            )}
            <Text
              style={[
                styles.description,
                tagline ? { paddingTop: 15 } : { paddingTop: 30 },
              ]}
            >
              {item.overview}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default VideoDetails;

const styles = StyleSheet.create({
  closeButtonPOS: {
    top: 25,
    right: 25,
    alignItems: "flex-end",
    height: 0,
    zIndex: 10,
    position: "fixed",
  },
  mobileTrailerContainer: {
    flex: 1,
    width: "100%",
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
    alignSelf: "center",
  },
  itemDetailsContainer: {
    marginHorizontal: 30,
    maxWidth: 500,
    alignSelf: "center",
    paddingBottom: 100,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    // alignSelf: 'center',
    paddingTop: 35,
    color: colors.darkgrey,
  },
  ratingsContainer: {
    paddingTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  traktPercent: {
    paddingLeft: 4,
    fontSize: 16,
    // fontWeight: 'bold',
    color: colors.darkgrey,
  },
  detailsContainer: {
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    color: colors.darkgrey,
  },
  genreDetailsContainer: {
    width: "100%",
  },
  otherDetailsContainer: {
    paddingTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    color: colors.darkgrey,
  },
  details: {
    paddingLeft: 5,
    paddingRight: 15,
    color: colors.maintheme,
  },
  genres: {
    paddingTop: 10,
    fontSize: 13,
    paddingLeft: 0,
    color: colors.maintheme,
  },
  description: {
    color: colors.darkgrey,
  },
  tagline: {
    fontStyle: "italic",
    color: colors.darkgrey,
    paddingTop: 30,
  },
  trailerContainer: {
    width: "100%",
    // alignItems: 'center',
    // justifyContent: 'center',
    position: "relative",
    overflow: "hidden",
    paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
    marginTop: 30,
    alignSelf: "center",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
    maxWidth: 600,
    maxHeight: 420,
  },
  posterContainer: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  poster: {
    width: 270,
    height: 400,
    alignSelf: "center",
  },
});

{
  /* <View style={styles.availableContainer}>
              <View style={styles.availableIcon} />
            </View> */
}
{
  /* <View style={styles.ratingsContainer}>
              <HeartIcon
                style={styles.traktHeart}
                color={colors.red}
                height={16}
                width={18}
                strokecolor={colors.mediumgrey}
              />
              <Text style={styles.traktPercent}>{rating}</Text>
              {rottenPercent ? (
                <>
                  <View style={styles.rottenTomato} />
                  <Text style={styles.rottenPercent}>44%</Text>
                </>
              ) : (
                <></>
              )}
            </View> */
}

{
  /* <View style={styles.posterContainer}>
              <Image source={{ uri: poster }} style={styles.poster} />
            </View> */
}
