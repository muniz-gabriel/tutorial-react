import { View, Text, StyleSheet } from 'react-native';


function Footer() {
    return (
        <View style={styles.footer}>
            <Text>Gabriel Muniz</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
    flex: 3,
    width: "100%",
    backgroundColor: "#3daff1",
    justifyContent: "center",
    alignItems: "center",
    },
});

export default Footer