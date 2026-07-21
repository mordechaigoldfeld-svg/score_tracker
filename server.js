import express from "express"
import "dotenv/config"
import { createScore } from "./controler/player_cntrl.js"
import { bodyExists } from "./middle/valid.js"
import scoreRouter from "./routes/scores.js"

const app = express()

const PORT  = process.env.PORT


app.use(express.json())

app.use("/scores",bodyExists,scoreRouter)


app.listen(PORT,()=>{
    console.log(`server running... on port:${PORT}`)
})