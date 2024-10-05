import styled from "styled-components/native";

export const Body = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	gap: 12px;
`;

export const PersonImage = styled.View`
	width: 50px;
	height: 50px;
	border-radius: 12px;
	background-color: #ffa500;
	align-items: center;
	justify-content: center;
	border: 3px solid rgba(0, 0, 0, 0.15);
`;
export const PersonTitle = styled.Text`
	font-size: 20px;
	font-family: Poppins_400Regular;
`;
