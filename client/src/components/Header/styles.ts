import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBar = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	position: relative;
`;

export const NavBar = styled.nav`
	display: flex;
	gap: 3rem;
`;

export const StyledLink = styled(Link)<{ theme: string }>`
	color: ${(props) => (props.theme === "dark" ? "#A8AEBF" : "#0c3d71")};
	text-decoration: none;
	font-size: 18px;
	font-weight: 500;
	transition: color 500ms ease;

	&:hover {
		color: ${(props) => (props.theme === "dark" ? "#0c3d71" : "#175ca7ff")};
	}
`;

export const Buttons = styled.div`
	position: absolute;
	right: 427px;
`

export const LoginButton = styled.button`
	border: none;
	border-radius: 8px;
	background-color: #175ca7ff;
	padding: 10px 20px;
	cursor: pointer;
	transition: background-color 500ms ease;

	&:hover {
		background-color: #2d79caff;
	}
`

export const LogoutButton = styled.button`
	background-color: transparent;
	color: #A8AEBF;
	cursor: pointer;
	border: none;
	margin-left: 25px;;

	&:hover {
		color: white;
		text-decoration: underline;
	}
`
