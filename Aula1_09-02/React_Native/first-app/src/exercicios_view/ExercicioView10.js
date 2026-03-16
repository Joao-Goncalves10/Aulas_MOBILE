import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView10() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textStyleWhite}>Header</Text>
        </View>
        <View style={styles.boxes}>
            <View style={styles.box1}>
                <Text style={styles.textStyleWhite}>1</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.textStyleWhite}>2</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.textStyleBlack}>3</Text>
            </View>
        </View>
        <View style={styles.Main}>
            <View style={styles.Painel}>
                <Text style={styles.textStyleBlack}>Painel Principal</Text>
            </View>
            <View style={styles.lateral}>
                <Text style={styles.textStyleWhite}>Lateral</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.textStyleWhite}> Footer</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    marginBottom:10,
    flex: 1,
    gap: 10,
  },
  textStyleWhite: {
    fontWeight: "bold",
    color: "white",
  },
  textStyleBlack: {
    fontWeight: "bold",
    color: "black"
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    height: 50,
  },
  boxes: {
    flexDirection: "row",
    alignItems: "stretch",
    height: 100,
    gap: 8,
  },
  box1: {
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  box2: {
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  box3: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  Main: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
  },
  Painel: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#cab6dc",
    flex: 2,
  },
  lateral: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#656565",
    flex: 1,
    gap: 8,
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4c0404",
    gap: 10,
  },
});