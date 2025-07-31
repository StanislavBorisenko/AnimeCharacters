import { type FC, type JSX } from "react";
import Spinner from "../Spinner";

interface IProps {
	loading: boolean;
	children: JSX.Element;
}

const Loader: FC<IProps> = ({ loading, children }) => {
	if (loading) return <Spinner />;
	return children;
};

export default Loader;
