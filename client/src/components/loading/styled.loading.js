import styled from "styled-components";
import { colors } from "../../GlobalStyle.styled";

export const container = styled.div`
	display: flex;
	width: 300px;
	height: 300px;
	overflow: hidden;
	margin: auto;
	margin-top: 7%;
	border-radius: 30px;
	opacity: 85%;
	background-color: ${colors.BACKGROUND};
`;

export const image = styled.img`
	width: 100%;
	object-fit: contain;
`;
