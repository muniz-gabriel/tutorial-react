import {View, Text, StyleSheet} from 'react-native'


export default function App () {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Logo</Text>
        <View style={styles.menu}></View>
      </View>

      <View style={styles.content}>

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

        <View style={styles.card2}>
          <View style={styles.square}></View>

          <View style={styles.text}>
            <View style={styles.title}>Card 2</View>
            <View style={styles.p}>Meu segundo Card,
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </View>
          </View>

        </View>

        <View style={styles.button}>
          <Text style={styles.titleb}>Ver mais</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Gabriel Muniz</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#5bf13dff",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "#3daff1",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#c3c3c3ff",
    padding: "20%"
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#050505ff",
  },
  card1: {
    width: "100%",
    height: 200,
    backgroundColor: "#f1f1f1",
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
  },
  card2: {
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
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#050505ff",
    borderRadius: 10,
    marginTop: 20,
  },
  titleb: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 50,
  },
  footer: {
    flex: 3,
    width: "100%",
    backgroundColor: "#3daff1",
    justifyContent: "center",
    alignItems: "center",
  }

})
