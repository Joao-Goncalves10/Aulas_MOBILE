import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView04() {
  return (
    <View style={styles.container}>
        <View style={styles.orangeBox}>
            <Text style={styles.textStyle}>Centro</Text>
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
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  orangeBox: {
    height: 120,
    width: 120,
    borderRadius: 10,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});