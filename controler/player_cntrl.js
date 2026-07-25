import { stats } from "../repository/player_repo.js";
import { getValidBody, player } from "../services/players_service.js";





export async function createScore(req,res) {
    try{
        const body = req.body
        const response = await getValidBody(body)
        res.status(response.status).json(response.message)

    }catch(err){
        console.log(err)
    }
    
}


export async function getPlayerScores(req,res) {
    try {
        const {name} = req.params
        const response = await player(name)
        res.status(response.status).json(response.message)
        
    } catch (error) {
        console.log(error)
    }
    
}




export async function getStats(req,res) {
    try {
        const response = await stats();
        res.status(200).json(response)
        
    } catch (error) {
        console.log(error)
    }
    
}

