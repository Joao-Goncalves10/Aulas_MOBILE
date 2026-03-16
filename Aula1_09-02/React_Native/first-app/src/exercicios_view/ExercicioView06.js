import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textStyle}>Header</Text>
        </View>
        <View style={styles.mainContent}>
            <Text style={styles.textStyle}>Main Content</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.textStyle}>footer</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: "baseline",
    justifyContent: "flex-start",
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    flex: 1,
    width: '100%',
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
    footer: {
    height: 50,
    width: '100%',
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});