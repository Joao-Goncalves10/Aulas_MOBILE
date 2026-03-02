
import { StyleSheet, Text, View } from 'react-native';
//import Exemplo01 from './jsx_examples/exemplo-01-esrtutura';
import Lista01 from './exercicios_listas/Lista01-JSXBasico-e-Expressoes';


export default function App() {
  return (
    <View style={styles.container}>
     
      <Lista01/>
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
