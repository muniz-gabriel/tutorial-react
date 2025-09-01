import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      {/* Links principais */}
      <View style={styles.navLinks}>
        <Link href={'/contact'}><Text style={styles.link}>Contato</Text></Link>
        <Link href={'/about'}><Text style={styles.link}>Sobre</Text></Link>
        <Link href={'/profile'}><Text style={styles.link}>Perfil</Text></Link>
      </View>

      {/* Conteúdo principal */}
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.titleb}>Ver mais</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // fundo preto
  },
  navLinks: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#111",
  },
  link: {
    color: "#e50914", // vermelho Netflix style
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#e50914",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  titleb: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
