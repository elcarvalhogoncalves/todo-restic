import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Body = styled(TouchableOpacity)`
    min-height: 64px;
    max-height: 64px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 16px;
    border: 1px solid #DDD;
    padding: 0 24px;
`;

export const Title = styled.Text.attrs({ numberOfLines: 1 })<{ check: boolean }>`
    text-decoration-line: ${(props) => props.check ? "line-through" : "none"};
    font-family: "Poppins_600SemiBold";
    font-size: 16px;
    flex: 1;
    color: #000;
    padding: 0 12px;
`;

export const Square = styled(TouchableOpacity)`
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: #DDD;
    border: 1px solid #BBBBBB;
    align-items: center;
`;