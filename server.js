import express from "express"
import "dotenv/config"
import { createScore } from "./controler/player_cntrl.js"
import { bodyExists } from "./middle/valid.js"
import scoreRouter from "./routes/scores.js"
import leaderboardsRouter from "./routes/leaderboard.js"
const app = express()

const PORT  = process.env.PORT


app.use(express.json())

app.use("/scores",bodyExists,scoreRouter)

app.use("/leaderboards",leaderboardsRouter)

app.listen(PORT,()=>{
    console.log(`server running... on port:${PORT}`)
})