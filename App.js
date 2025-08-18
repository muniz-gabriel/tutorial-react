import {View, Text, StyleSheet} from 'react-native'
import  Header from './src/components/Header'
import Footer from './src/components/Footer'
import Card from './src/components/Card'

export default function App () {
  return (
    <View style={styles.container}>
    <Header />


      <View style={styles.content}>

        
        <Card />
        <Card />


        <View style={styles.button}>
          <Text style={styles.titleb}>Ver mais</Text>
        </View>
      </View>

      <Footer />

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
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#c3c3c3ff",
    padding: "20%"
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
})
