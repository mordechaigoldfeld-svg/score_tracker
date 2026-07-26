import express from "express"
import "dotenv/config"
import { createScore } from "./controler/player_cntrl.js"
import { bodyExists } from "./middle/valid.js"
import scoreRouter from "./routes/scores.js"
import leaderboardsRouter from "./routes/leaderboard.js"
import playerRouter from "./routes/player.js"
import statsRouter from "./routes/stats.js"
import gameRouter from "./routes/game.js"

const app = express()

const PORT  = process.env.PORT


app.use(express.json())

app.use("/scores",bodyExists,scoreRouter)

app.use("/leaderboards",leaderboardsRouter)

app.use("/player",playerRouter)

app.use("/stats",statsRouter)

app.use("/games",gameRouter)


app.listen(PORT,()=>{
    console.log(`server running... on port:${PORT}`)
})