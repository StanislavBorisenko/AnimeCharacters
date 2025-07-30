import styled from "styled-components";

export const Detailed = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Image = styled.img`
	min-width: 300px;
	max-width: 300px;
	min-height: 250px;
	max-height: 300px;
	border-radius: 14px;
`;

export const Name = styled.div`
	color: #ebeef5;
	font-size: 24px;
	font-weight: 600;
	margin: 20px 0;
`;
export const Description = styled.div`
	display: flex;
	gap: 50px;
`;

export const Container = styled.div`
	text-align: center;
`;

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
