import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.div<{ theme: string }>`
	font-size: 12px;
	color: ${(props) => (props.theme === "dark" ? "#8e95a9" : "#063b74ff")};
	margin-bottom: 7px;
`;

export const Information = styled.div<{ theme: string }>`
	color: #d3d6dfff;
	font-size: 14px;
	margin-bottom: 15px;
`;

export const Ability = styled.p`
	margin-bottom: 10px;
`;
