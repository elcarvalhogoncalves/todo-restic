import { Body, Title } from "./styles";
import Feather from '@expo/vector-icons/Feather';

export function ButtonAdd(){

    return(
        <Body>
            <Title>ButtonAdd</Title>
            <Feather name="plus" size={24} stroke-width={20} color="black" />
        </Body>
    );

}