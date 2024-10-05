import { View } from "react-native";
import styled from "styled-components/native";

export type SectionHiddenProps = {
	hidden: boolean;
};

export const Body = styled.View`
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;
`;

export const TitleSection = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const TitleText = styled.Text`
	font-size: 24px;
	font-weight: semi-bold;
	font-family: Poppins_600SemiBold;
	font-weight: bold;
`;

export const BodySection = styled(View)<SectionHiddenProps>`
	display: ${({ hidden }) => (hidden ? "none" : "flex")};
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;
