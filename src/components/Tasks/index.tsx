import { Section } from "../../components/Section";
import { Text } from "react-native";
import { Task } from "../../components/Task";
import { ButtonAdd } from "../ButtonAdd";

export function Tasks() {
    return (
        <Section title="Tasks">
            <Task title="teste"/>
            <ButtonAdd/>
        </Section>
    );
}