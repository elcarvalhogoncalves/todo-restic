import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Body = styled(TouchableOpacity)`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background-color: #ddd;
	border: 1px solid #bbb;
	border-radius: 16px;
`;
export const Title = styled.Text`
	font-size: 16px;
	font-weight: bold;
	font-family: Poppins_700Bold;
	margin-right: 4px;
`;
