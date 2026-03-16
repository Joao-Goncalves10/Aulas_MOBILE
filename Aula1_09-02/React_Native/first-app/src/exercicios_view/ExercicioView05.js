import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
  return (
    <View style={styles.container}>
        <View style={styles.greenBox}>
            <Text style={styles.textStyle}>Coluna 1</Text>
        </View>
        <View style={styles.blueBox}>
            <Text style={styles.textStyle}>Coluna 2</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  greenBox: {
    height: '100%',
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: '100%',
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});