
import { StyleSheet, Text, View } from 'react-native';
import ViewScaffold from './basic_components/view_examples';
import Lista03 from './exercicios_listas/Lista03 - Listas_com_map';
//import Exemplo01 from './jsx_examples/exemplo-01-esrtutura';




export default function App() {
  return (
    <View style={styles.container}>
      <ViewScaffold/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
