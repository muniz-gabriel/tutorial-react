import { View, Text, StyleSheet } from 'react-native';

function Card() {
    return (
    <View style={styles.card1}>
              <View style={styles.square}></View>
    
              <View style={styles.text}>
                <View style={styles.title}>Card 1</View>
                <View style={styles.p}>Meu primeiro Card,
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </View>
              </View>
              
            </View>
    )
}

const styles = StyleSheet.create({
    card1: {
        width: "100%",
        height: 200,
        backgroundColor: "#f1f1f1",
        marginTop: 20,
        borderRadius: 10,
        padding: 20,
      },
      square: {
        width: 100,
        height: 100,
        backgroundColor: "#050505ff",
        marginTop: 20,
        borderRadius: 10,
        padding: 20,
        
      },
      text: {
        marginLeft: 120,
        justifyContent: "center",
        alignItems: "flex-start",
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: -150,
      },
      title: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
      },
      p: {
        color: "#000",
        fontSize: 16,
      }
});


export default Card;