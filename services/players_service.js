import { log } from "console";
import { getBestGame, getById, insert } from "../repository/player_repo.js";
import { isValidBodyKeys,isValidGame,isValidType } from "../utils/validator.js";


export async function getValidBody(body) {
    try{
        if(isValidBodyKeys(body)){
            const {playerName,game,points} = body
            if(isValidGame(game)){
                if(isValidType(playerName,"string")){
                    if(isValidType(points,"number")){
                        const insertId  = await insert({
                             playerName:playerName.toLowerCase(),
                             game:game.toLowerCase(),
                             points,
                             createdAt:new Date()
                        }) 
                        return {status:201,message:await getById(insertId)}
                    }
                    return {status:422,message:"invalid point type"}
                }
                return {status:422,message:"invalid player name type"}
            }
            return {status:422,message:"invalid game"}
        }
        return {status:422,message:"invalid keys"}

    }catch(err){
        console.log(err)
    }
    
}


// const data = {playerName:"moty",game:"Tetris",points:78}

export async function bestGame(game) {
    try {
        if(isValidGame){
            const rank = await getBestGame(game);
            console.log(game)
            if(rank.length === 0){
                return {status:404,message:"game not found"}
            }
            return {status:200,message:rank}
        }
        return {status:400,message:"invalid game"}
        
    } catch (error) {
      console.log(err)  
    }
    
}
