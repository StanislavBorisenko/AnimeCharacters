export interface ICharacter {
  id: string;
  name: string;
  image: string | null;
  jutsu: string[];
  birthdate: number;
  debut: string;
  clan: string;
}

export interface IResponse {
    characters: ICharacter[];
}