import { Body } from "./styles";
import { Container } from "../../components/Container";
import { Text } from "react-native";
import { Section } from "../../components/Section";
import { Tasks } from "../../components/Tasks";
import { Header } from "../../components/Header";

export function Main() {
    return (
        <Body>
            <Header/>
            <Container>
                <Tasks/>
            </Container>  
        </Body>
    );
}