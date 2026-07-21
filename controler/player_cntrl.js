import { getValidBody } from "../services/players_service.js";






export async function createScore(req,res) {
    try{
        const body = req.body
        const response = await getValidBody(body)
        res.status(response.status).json(response.message)

    }catch(err){
        console.log(err)
    }
    
}