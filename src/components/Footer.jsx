import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>@ Gabriel Muniz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    width: "100%",
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#222",
  },
  text: {
    color: "#fff", // vermelho
    fontWeight: "bold",
  },
});

export default Footer;
