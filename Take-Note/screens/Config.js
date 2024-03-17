import { Button, StyleSheet, Text, View } from "react-native";
import { signOut } from "firebase/auth";
import firebaseAuth from "../firebase/config";

export default function Config() {
    return (
        <View style={styles.container}>
            <Text>Tela de configuração!</Text>
            <Button title="Sair" onPress={() => { signOut(firebaseAuth) }}></Button>
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