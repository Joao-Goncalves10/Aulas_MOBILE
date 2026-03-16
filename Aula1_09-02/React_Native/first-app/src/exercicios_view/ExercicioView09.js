import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView01() {
  return (
    <View style={styles.container}>
        <View style={styles.base}>
            <View style={styles.red}></View>
            <View style={styles.yellow}></View>
            <View style={styles.green}></View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  base: {
    backgroundColor: "black",
    borderRadius: 10,
    height: 250,
    width:130,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddinh: 15,
  },
  red: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  yellow: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  green: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});