import { PropsWithChildren, useState } from "react";
import { Body, TitleSection, TitleText } from "./styles";
import { Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';

type SectionProps = PropsWithChildren<{}> & {
    title: string;
}

export function Section({ children, title }: SectionProps) {
    const [isHidden, setIsHidden] = useState(false);

    function handleHide(){

    }
    return (
        <Body>
            <TitleSection>
                <TitleText>{title}</TitleText>
                {isHidden ? <Feather onPress={()=>setIsHidden(!isHidden)} name="chevron-down" size={40} color="black" /> : <Feather onPress={()=>setIsHidden(!isHidden)}  name="chevron-up" size={40} color="black" />}
            </TitleSection>
            {isHidden ? null : children}
        </Body>
    );
}