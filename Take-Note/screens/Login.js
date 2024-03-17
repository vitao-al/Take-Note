import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import Logo from "../components/logo";
import firebaseAuth from "../firebase/config";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from 'react';

export default function Login(){

    const [email, email1] = useState("");
    const [senha, senha1] = useState("");
    const auth = getAuth();

    const doCadastro = () => {
        if(email === "" || senha === ""){
            alert('Todos os campos devem ser preechidos');
            return;
        }
        else{
            createUserWithEmailAndPassword(auth, email, senha);
            console.log('aqui');
        }
    };
    const doLogin = () => {
        signInWithEmailAndPassword(firebaseAuth, email, senha)
            .catch((error) => {
                console.log('logou');
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    } 
    const doRecuperarSenha = () => {

    };
    return(
        <View style={style.container}>
            <Logo></Logo>
            <Text style={style.label}>Informe os dados para entrar!</Text>
            <TextInput style={style.input} placeholder="Email" value={email} onChangeText={email1}></TextInput>
            <TextInput style={style.input} id="senha" placeholder="Senha" value={senha} onChangeText={senha1}></TextInput>
            <TouchableOpacity style={style.forgoutPassword}>
                <Text>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <View style={style.areaBottom}>
            <TouchableOpacity title="Cadastrar" style={style.bottom} onPress={() => doCadastro()}>
                    <Text style={style.labelBottom}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity title="Entrar" style={style.bottom} onPress={() => doLogin()}>
                    <Text style={style.labelBottom}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f8f2',
        alignItems: 'center',
        justifyContent: 'center'

    },
    label:{
        marginRight: '25%',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#a1bdca',
        width: '70%',
        height: 40,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 10
    },
    areaBottom: {
        margin: 30,
        padding: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    forgoutPassword: {
        marginRight: '40%'
    },
    bottom: {
            marginHorizontal: 30,
            backgroundColor: '#18374b',
            borderRadius: 8,
            width: '30%',
            height: 40,
            alignContent: 'center',
            alignItems: 'center',
            padding: 10
        },
    labelBottom: {
        fontWeight: 'bold',
        color: '#f7f8f2',
        textAlign: 'center'
    }
})