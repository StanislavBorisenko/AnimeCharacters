import { URL } from "../config";

const { default: axios } = require("axios")

export const getCharacters = async () => {
    try {
        const response = await axios.get(URL);
        return response.data
  } catch (error) {
        console.error(`Ошибка: ${error}`);
  }
}

export const getOneCharacter = async (id: string) => {
    try {
        const response = await axios.get(`${URL}/${id}`)
        return response.data
    } catch (error) {
        console.error(`Ошибка: ${error}`);
    }
}
