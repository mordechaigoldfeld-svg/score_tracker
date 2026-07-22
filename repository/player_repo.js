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
        console.log("start",game)
      const result = await scores.aggregate([
      { 
        $match: { "game": game } 
      }
    ]).toArray();

    return result
    console.log(result);

    }catch(err){
        console.log(err)
    }
    
}




console.log(await getBestGame("Tetris"))
// console.log(await getAll());

console.log("end");





