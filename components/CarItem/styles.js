import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get('window').height,
  },
  heading: {
    marginTop: "10%",
    alignItems: "center",
    width: "100%",
  },
  mainHeading: {
    fontSize: 40,
    fontWeight: "500",
  },
  subHeading1: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subHeading2: {
    textDecorationLine: 'underline'
  },
  image: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      position: 'absolute'
  },
  buttons: {
    position: 'absolute',
    bottom: 50,
    width: '100%'
  }
});

export default styles