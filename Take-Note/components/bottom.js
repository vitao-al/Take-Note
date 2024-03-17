import { TouchableOpacity, Text, StyleSheet} from "react-native";

export default function Bottom( {text} ){

    

    return(
        <TouchableOpacity style={style.bottom}>
            <Text style={style.label}>{text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
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
    label:{
        fontWeight: 'bold',
        color: '#f7f8f2',
        textAlign: 'center'
    }
})