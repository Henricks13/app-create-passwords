import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';

export function PasswordItem({data, removePassword}) {
    const handleCopyPassword = async () => {
        await Clipboard.setStringAsync(data.password);
        alert('Senha copiada para a área de transferência!');
    };

    return(
        <Pressable onPress={handleCopyPassword} onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data.name}: {data.password}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
    },
    text:{
        color: "#FFF"
    }
})