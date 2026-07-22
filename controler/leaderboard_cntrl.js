import { getBestAll } from "../repository/player_repo.js";
import { bestGame } from "../services/players_service.js";

export async function getRank(req,res) {
    try {
        const {game} = req.params
        const response = await bestGame(game.toLowerCase());
        res.status(response.status).json(response.message)
    } catch (error) {
        console.log(error)
        
    }
    
}



export async function getAllBetter(req,res) {
    try {
        const response  = await getAllBetter()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
    
}