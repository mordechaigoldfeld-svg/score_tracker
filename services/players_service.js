import { getById, insert } from "../repository/player_repo.js";
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

