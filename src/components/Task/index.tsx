import { Body, Title, Square } from "./styles";
import { Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";

export function Task({ title }: { title: string }) {
    const [checked, setChecked] = useState(false);
    return (
        <Body 
            onPress={() => console.log("Task clicked")}
            style={
            {shadowColor: "#a1a1a1",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity:  0.20,
                shadowRadius: 5.62,
                elevation: 7}
        }>
            <Square onPress={()=> setChecked(!checked)}>
                {checked && <Feather name="check" size={22} color="#4CAF50" />}
            </Square>
            <Title check={checked} >{title}</Title>
            <Feather onPress={()=> console.log("Deletado")} name="trash-2" size={24} color="#F44336" />
        </Body>
    );
}