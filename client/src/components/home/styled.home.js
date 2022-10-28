import styled from "styled-components";
import { colors } from "../../GlobalStyle.styled";
export const home_whrapper = styled.div`
	/* display: grid;
	grid-template-columns: repeat(3, 1fr); */
	/* width: 100%; */
	/* display: flex; */
	/* justify-content: center; */
	/* align-items: center; */
	font-family: sans-serif;
	background-color: ${colors.BACKGROUND};
`;
export const loadingContainer = styled.div`
	display: flex;
	/* flex: 1; */
	flex-direction: column;
	height: 100vw;
	background-color: ${colors.BACKGROUND};
`;
