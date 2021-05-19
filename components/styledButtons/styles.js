import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    cursor: 'pointer',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20

  },
  content: {
      fontSize: 12,
      fontWeight: '500',
      textTransform: 'uppercase',
  },
});

export default styles