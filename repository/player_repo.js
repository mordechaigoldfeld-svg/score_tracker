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







export async function getBestGame(game) {
    try{
      const result = await scores.aggregate([
      { 
        $match: { "game": game }
      },
      { 
        $sort: { points: -1 } 
      },
      { 
        $limit: 10 
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



export async function getBestAll() {
    try {
        const result = await scores.aggregate([
            {
                $sort:{points: -1}
            },
            {
                $limit:10
            },
            {
                $project:{
                    _id:0,
                    playerName:1,
                    game:1,
                    points:1,
                    createdAt:1
                }
            }
        ]).toArray()
            return result
        
    } catch (error) {
        console.log(error)
        
    }
    
}


// console.log( await getBestAll())





