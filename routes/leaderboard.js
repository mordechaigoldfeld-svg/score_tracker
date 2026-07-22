import express from "express"
import { getAllBetter, getRank } from "../controler/leaderboard_cntrl.js"

const router  = express.Router()


export default router


router.get("/global",getAllBetter)


router.get("/:game",getRank)


