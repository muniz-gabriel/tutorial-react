import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView style={styles.content}>
        <Card
          title="House of Dragons"
          desc="Guerra pelo trono com Dragões"
          img="https://classic.exame.com/wp-content/uploads/2022/08/house-of-the-dragon.jpg"
        />

        <Card
          title="Lord of The Rings"
          desc="Batalha contra Sauron"
          img="https://m.media-amazon.com/images/S/pv-target-images/6371c93d1bc13c04f6db4cff153a4c5b8da969b204254cbad3cd6140b6e3713c._SX1080_FMjpg_.jpg"
        />

        <Card
          title="Game of Thrones"
          desc="Reinos lutando pelo Trono de Ferro"
          img="https://br.web.img3.acsta.net/pictures/19/03/21/16/15/4239577.jpg"
        />

        <View style={styles.button}>
          <Text style={styles.titleb}>Ver mais</Text>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5bf13d",
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#c3c3c3",
    padding: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#050505",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  titleb: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
