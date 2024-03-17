import { StyleSheet, Image } from "react-native";

export default function Logo(){
    return (
        <Image style={style.image} source={require("../assets/logo-notas2.jpeg")}>
        </Image>
    );
};

const style = StyleSheet.create({
    image:{
        marginBottom: 40,
        width: 180,
        height: 250
    }
})