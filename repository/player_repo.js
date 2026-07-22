import { Collection, ObjectId } from "mongodb"
import { scores } from "../DB/db.js"
import { log } from "node:console"





export async function insert(body) {
    try{
        const res = await scores.insertOne(body)
        return res.insertedId
    }catch(err){
        console.log(err)
    }
    
}

export async function getById(_id) {
    try{
        const res = await scores.findOne({_id: new ObjectId(_id)})
        return res
    }catch(err){
        console.log(err)
    }
    
}



export async function getAll() {
    try{
        const res = await scores.find().toArray()
        return res
    }catch(err){
        console.log(err)
    }
    
}



export async function getBestGame(game) {
    try{
      const result = await scores.aggregate([
      { 
        $match: { "game": game.toLowerCase() }
      },
      { 
        $sort: { points: -1 } 
      },
      { 
        $limit: 3 
      },
        {
        $setWindowFields: {
        sortBy: { points: -1 },
        output: {
            rank: { $rank: {} } 
      }
    }
  },
      { 
        $project: { 
          _id: 0,
          playerName: 1, 
          points: 1 ,
          rank:1
        } 
      }
    ]).toArray();

    return result
    console.log(result);

    }catch(err){
        console.log(err)
    }
    
}










