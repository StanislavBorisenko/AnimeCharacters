import * as characterService from "../services/charactersService";
import { Request, Response } from "express";

export const getCharacters = async (req: Request, res: Response) => {
    try {
        const characters = await characterService.getCharacters()
        res.json(characters)
    } catch (error) {
        res.status(500).json({message: `Ошибка ${error}`})
    }
}

export const getCharacterById = async (req: Request, res: Response) => {
    try {
        const character = await characterService.getOneCharacter(req.params.id)
        res.json(character)
    } catch (error) {
        res.status(500).json({message: `Ошибка ${error}`})
    }
}
