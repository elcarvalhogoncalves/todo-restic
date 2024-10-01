import { PropsWithChildren } from "react";
import { Body, TitleSection } from "./styles";
import { Text } from "react-native";

type SectionProps = PropsWithChildren<{}> & {
    title: string;
}

export function Section({ children, title }: SectionProps) {
    return (
        <Body>
            <TitleSection>
                <Text>{title}</Text>
                <Text>Icon</Text>
            </TitleSection>
            {children}
        </Body>
    );
}