import { Body } from "./styles";
import { Container } from "../../components/Container";
import { Text } from "react-native";
import { Section } from "../../components/Section";
import { Tasks } from "../../components/Tasks";

export function Main() {
    return (
        <Body>
            <Container>
                <Tasks/>
            </Container>  
        </Body>
    );
}