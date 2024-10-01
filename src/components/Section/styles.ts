import { View } from "react-native";
import styled from "styled-components/native";

export type SectionHiddenProps = {
    hidden: boolean;
}


export const Body = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const TitleSection = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;
export const BodySection = styled(View)<SectionHiddenProps>`
    display: ${({ hidden }) => hidden ? "none" : "flex"};
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;