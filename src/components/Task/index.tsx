import { Body } from "./styles";
import { Text } from "react-native";

export function Task({ title }: { title: string }) {
    return (
        <Body style={
            {shadowColor: "#a1a1a1",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity:  0.20,
                shadowRadius: 5.62,
                elevation: 7}
        }>
            <Text>{title}</Text>
        </Body>
    );
}