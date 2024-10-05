import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Body = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
`;
export const Title = styled.Text`
	font-size: 20px;
	font-family: Poppins_600SemiBold;
	color: #333;
	text-transform: uppercase;
`;

export const IconButton = styled(TouchableOpacity)`
	justify-content: center;
	align-items: center;
`;
