import styled from "styled-components";

export const NotFoundMessage = styled.p<{ theme: string }>`
	color: ${(props) => (props.theme === "dark" ? "#207dd4" : "#0c3d71")};
	text-align: center;
`;
