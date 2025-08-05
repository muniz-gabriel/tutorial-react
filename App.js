import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <Text>Tutorial criando App com Expo - CARMOB IFSP</Text>
      <h2>React Native</h2>
      <Text style={styles.tituloPrincipal}>Título Principal</Text>
      <Text style={styles.subTitulo}>Subtítulo</Text>
      <Text>Este é um parágrafo</Text>
      <Text style={styles.saibaMais}>Saiba mais</Text>
      <StatusBar style="auto" />
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
  tituloPrincipal: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subTitulo: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  saibaMais: {
    fontSize: '16px',
    color: "#464646",
  },
  box1: {
    width: "100%",
    heght: 80,
    backgroundColor: "#",
  },
  box2: {

  }
});
