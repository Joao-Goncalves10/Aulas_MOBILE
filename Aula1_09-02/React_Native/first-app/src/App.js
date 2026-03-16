
import { StyleSheet, Text, View } from 'react-native';
import ExercicioView01 from './exercicios_view/ExercicioView01';
import ExercicioView02 from './exercicios_view/ExercicioView02';
import ExercicioView03 from './exercicios_view/ExercicioView03';
import ExercicioView04 from './exercicios_view/ExercicioView04';
import ExercicioView05 from './exercicios_view/ExercicioView05';
import ExercicioView06 from './exercicios_view/ExercicioView06';
import ExercicioView07 from './exercicios_view/ExercicioView07';
import ExercicioView08 from './exercicios_view/ExercicioView08';
import ExercicioView09 from './exercicios_view/ExercicioView09';
import ExercicioView10 from './exercicios_view/ExercicioView10';
//import Exemplo01 from './jsx_examples/exemplo-01-esrtutura';




export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView10/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
