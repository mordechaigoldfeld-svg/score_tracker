import express from "express"
import { getStats } from "../controler/player_cntrl.js"

const router = express.Router()

export default router


router.get("/",getStats)