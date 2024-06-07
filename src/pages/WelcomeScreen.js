import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";

export function WelcomeScreen({ setIsAuthenticated }) {
    const [password, setPassword] = useState("");
    const correctPassword = "Teste@13"; // Substitua "senhaCliente" pela senha correta

    function handleLogin() {
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Senha incorreta!');
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/cliente.png')} />
            <Text style={styles.title}>Olá Luana, Bem vinda denovo!</Text>
            <Text style={styles.subtitle}>Digite a senha para prosseguir</Text>

            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Senha"
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Prosseguir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#FeFeFe", // Alterar a cor de fundo para corresponder à página inicial
    },
    image: {
        width: 150, // Aumentar a largura da imagem
        height: 150, // Aumentar a altura da imagem
        borderRadius: 75, // Ajustar o raio da borda para manter a imagem redonda
        marginBottom: 20,
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        color: "#000", // Manter a cor do texto branca para contraste
        marginBottom: 10
    },
    subtitle:{
        fontSize:18,
        color: "#000", // Manter a cor do texto branca para contraste
        marginBottom: 20
    },
    input: {
        height: 40,
        width: "100%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },
    button:{
        backgroundColor: "#392de9",
        borderRadius: 20,
        alignItems: "center",
        marginTop:14,
        marginBottom:14,
        padding: 10,
        width: "100%",
        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText:{
        color:"#FFF",
        fontWeight: "bold"
    }
});