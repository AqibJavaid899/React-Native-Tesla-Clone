import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  heading: {
    marginTop: "30%",
    alignItems: "center",
    width: "100%",
  },
  mainHeading: {
    fontSize: 40,
    fontWeight: "500",
  },
  subHeading: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      position: 'absolute'
  }
});

export default styles