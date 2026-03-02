
import { StyleSheet, Text, View } from 'react-native';
//import Exemplo01 from './jsx_examples/exemplo-01-esrtutura';
import Lista01 from './exercicios_listas/Lista01-JSXBasico-e-Expressoes';
import Lista02 from './exercicios_listas/Lista02 - Renderização_Condicional';


export default function App() {
  return (
    <View style={styles.container}>
     
      <Lista02/>
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
