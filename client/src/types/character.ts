export interface ICharacter {
	id: string;
	name: string;
	image: string | null;
	jutsu: string[];
	birthdate: string;
	debut: string;
	clan: string;
	images?: string[] | string;
}

export interface IResponse {
	characters: ICharacter[];
}
