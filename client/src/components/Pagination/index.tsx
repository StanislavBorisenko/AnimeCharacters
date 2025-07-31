import React, { type FC } from "react";
import { Container } from "./styles";
import { ConfigProvider, Pagination } from "antd";
import type { ICharacter } from "../../types/character";

interface IProps {
	characters: ICharacter[];
	currentPage: number;
	charactersPerPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationContainer: FC<IProps> = ({
	characters,
	currentPage,
	charactersPerPage,
	setCurrentPage,
}) => (
	<Container>
		<ConfigProvider
			theme={{
				token: {
					colorText: "#207dd4",
					colorBgTextHover: "#84add3",
				},
			}}
		>
			<Pagination
				defaultCurrent={currentPage}
				defaultPageSize={charactersPerPage}
				showSizeChanger={false}
				total={characters.length}
				onChange={(current) => {
					setCurrentPage(current);
				}}
			/>
		</ConfigProvider>
	</Container>
);

export default PaginationContainer;
