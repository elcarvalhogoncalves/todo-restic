import { Body, Title } from "./styles";
import Feather from '@expo/vector-icons/Feather';

type ButtonAddProps = {
    handleModalCreateTask: () => void;
}

export function ButtonAdd({ handleModalCreateTask }: ButtonAddProps) {

    return(
        <Body onPress={handleModalCreateTask}>
            <Title>ButtonAdd</Title>
            <Feather name="plus" size={24} stroke-width={20} color="black" />
        </Body>
    );

}