import express from "express"
import { createScore } from "../controler/player_cntrl.js"

const router = express.Router()

export default router


router.post("/",createScore)