import { Image } from 'expo-image';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image 
          style={styles.image}
          source={require('../../assets/img/logo.jpg')}
        />
        <Text style={styles.tipo}>
          Movie <Text style={{ color: '#e50914' }}>Wiki</Text>
        </Text>
      </View>
      <Entypo name="menu" size={30} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    backgroundColor: "#111",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  image: { 
    width: 35, 
    height: 35,
    borderRadius: 8,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  tipo: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  }
});

export default Header;
