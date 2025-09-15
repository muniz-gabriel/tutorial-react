import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

function CardUser({ name, email, avatar }) {
  return (
    <View style={styles.card}>
      <Image 
        style={styles.image} 
        source={avatar} />

      <View style={styles.name}>
        <Text style={styles.title_card}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff", // card branco
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    color: "#e50914", // título em vermelho
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    color: "#000",
    fontSize: 14,
    marginTop: 4,
  },
});

export default CardUser;
