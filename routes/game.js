import express from "express";
import { getName } from "../controler/player_cntrl.js";

const router = express.Router()

export default router

router.get("/",getName)