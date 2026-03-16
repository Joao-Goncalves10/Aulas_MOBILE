import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
  return (
    <View style={styles.container}>
        <View style={styles.sidebar}>
            <Text style={styles.textStyle}>sidebar</Text>
        </View>
        <View style={styles.containerCard}>
            <View style={styles.card1}>
                <Text style={styles.textStyle}>card1</Text>
            </View>
            <View style={styles.card2}>
                <Text style={styles.textStyle}>card2</Text>
            </View>
            <View style={styles.card3}>
                <Text style={styles.textStyle}>card3</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  containerCard: {
    flexDirection: 'column',
    flex: 0.85,
    padding: 10,
    gap:10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  card1: {
    backgroundColor: "green",
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
  },
  card2: {
    backgroundColor: "orange",
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
  },
    card3: {
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
  },
  sidebar: {
    backgroundColor: "gray",
    flex:0.15,
    justifyContent: "center",
    alignItems:"center",
  }
});