import express from "express"
import { getPlayerScores } from "../controler/player_cntrl.js"


const router = express.Router()

export default router


router.get("/:name",getPlayerScores)