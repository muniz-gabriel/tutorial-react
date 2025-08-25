import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}> @ Gabriel Muniz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    width: "100%",
    backgroundColor: "#3daff1",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Footer;
