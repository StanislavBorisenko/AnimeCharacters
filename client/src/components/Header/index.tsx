import { type FC } from "react";
import {
	Buttons,
	HeaderBar,
	LoginButton,
	LogoutButton,
	NavBar,
	StyledLink,
} from "./styles";
import ThemeButton from "../ThemeButton";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { usePrivy } from "@privy-io/react-auth";

const Header: FC = () => {
	const { theme } = useContext(ThemeContext);
	const { ready, authenticated, user, login, logout } = usePrivy();

	return (
		<HeaderBar>
			<NavBar>
				<ThemeButton />
				<StyledLink theme={theme} to="/">
					Главная
				</StyledLink>
			</NavBar>
			<Buttons>
				{ready && authenticated ? (
					<div>
						{user?.email?.address.split("@")[0]}
						<LogoutButton onClick={logout}>Log Out</LogoutButton>
					</div>
				) : (
					<LoginButton onClick={login}>Log In</LoginButton>
				)}
			</Buttons>
		</HeaderBar>
	);
};

export default Header;
