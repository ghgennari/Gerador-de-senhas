import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./LengthPasswordStyles";

interface LengthProps{
    length: string;
    setLength: (value: string) => void;
}

export function LengthPassword({ length, setLength}: LengthProps){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Tamanho da senha</Text>
            <TextInput 
                style={styles.input}
                keyboardType="numeric"
                value={length}
                onChangeText={setLength}
                />
        </View>
    )
}

