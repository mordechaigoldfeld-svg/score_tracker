import { ObjectId } from "mongodb"
import { scores } from "../DB/db.js"





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
