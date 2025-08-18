import { View, Text, StyleSheet } from 'react-native';

function Header() {
    return (
            <View style={styles.header}>
                <Text>Logo</Text>
                <View style={styles.menu}></View>
            </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: "100%",
        backgroundColor: "#3daff1",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },container: {
    flex: 2,
    backgroundColor: "#5bf13dff",
    justifyContent: "center",
    alignItems: "center"
  },
    menu: {
        width: 40,
        height: 40,
        backgroundColor: "#050505ff",
    }
});

export default Header;