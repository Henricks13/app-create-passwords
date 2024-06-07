import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, TextInput } from "react-native";
import useStorage from "../../hooks/useStorage";

export function ModalManualAdd({ handleClose }) {
    const { saveItem } = useStorage();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleSavePassword() {
        // Salvar o nome e a senha usando saveItem
        saveItem("@pass", { name, password });
        handleClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Adicionar Manualmente</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Nome"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Senha"
                    secureTextEntry
                />

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleSavePassword}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:"rgba (24, 24, 24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop:24,
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 8,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color: "#000",
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius:8
    },
    text:{
        color: "#FFF",
        textAlign:"center"
    },
    buttonArea:{
        flexDirection:"row",
        width: "90%",
        marginTop: 8,
        alignItems:"center",
        justifyContent: "space-between"
    },
    button:{
        flex: 1,
        alignItems: "center",
        marginTop:14,
        marginBottom:14,
    },
    buttonSave:{
        backgroundColor: "#392DE9",
        borderRadius: 8,
    },
    buttonSaveText:{
        color:"#FFF",
        fontWeight: "bold"
    },
    input: {
        height: 40,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },
});

