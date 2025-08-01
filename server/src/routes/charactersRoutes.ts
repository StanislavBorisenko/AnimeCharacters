import { Router } from "express";
import { getCharacterById, getCharacters } from "../controllers/charactersController";

const router = Router()

router.get('/characters', getCharacters)
router.get('/characters/:id', getCharacterById)

export default router
