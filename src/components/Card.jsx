import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

function Card({ title, desc, img }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
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
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    color: "#000",
    fontSize: 14,
    marginTop: 4,
  },
});

export default Card;
