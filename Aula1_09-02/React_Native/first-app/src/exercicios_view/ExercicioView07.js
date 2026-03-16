import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
  return (
    <View style={styles.container}>
        <View style={styles.linha}>
            <View style={styles.verde}>
                <Text style={styles.textStyle}></Text>
            </View>
            <View style={styles.vermelho}>
                <Text style={styles.textStyle}></Text>
            </View>
        </View>

        <View style={styles.linha}>
            <View style={styles.azul}>
                <Text style={styles.textStyle}></Text>
            </View>
            <View style={styles.amarelo}>
                <Text style={styles.textStyle}></Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap:10,
    flex: 1,
  },
  linha: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  verde: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  vermelho: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  azul: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  amarelo: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});