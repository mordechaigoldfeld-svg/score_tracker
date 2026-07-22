import express from "express"
import { getRank } from "../controler/leaderboard_cntrl.js"

const router  = express.Router()


export default router


router.get("/:id",getRank)