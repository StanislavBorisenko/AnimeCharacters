import styled from "styled-components";

export interface IProps {
	name: string;
	image: string | null;
	jutsu: string[];
	birthdate: string;
	debut: string;
	clan: string;
}

export const Card = styled.div`
	display: flex;
	gap: 100px;
	margin-bottom: 50px;
	padding: 20px;
	transition: transform 400ms ease;

	&:hover {
		transform: scale(1.03);
	}
`;

export const Image = styled.img`
	min-width: 300px;
	max-width: 300px;
	min-height: 250px;
	max-height: 300px;
	border-radius: 14px;
`;

export const Description = styled.div``;

export const Information = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
`;

export const Name = styled.div<{ theme: string }>`
	color: #ebeef5;
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 20px;
`;
