import { Button, StyleSheet, Text, View } from "react-native";
import firebaseAuth from "../firebase/config";
import { signOut } from "firebase/auth";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Tela de Notas!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});