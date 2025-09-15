import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

function CardUser({ id, name, email, avatar }) {

  const router = useRouter()

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: 'DELETE',
    })
    
    if (response.ok) {
        console.log('Usuário deletado com sucesso.')
        //const updatedUsers = users.filter(user => user.id !== id); // Filtra o usuário deletado
    } else {
        console.log('Erro ao deletar usuário.')
    }
  }

  const handleEdit = () => {
    console.log("Editar usuário")
    router.push({
      pathname: '/editUser',
      params: { id, name, email, avatar }
    })
  }

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: avatar }} />
      
      <View style={styles.name}>
        <Text style={styles.titulo_card}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <View>
        <Pressable onPress={handleDelete} >
            <EvilIcons name="trash" size={24} color="black" />
        </Pressable>
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
