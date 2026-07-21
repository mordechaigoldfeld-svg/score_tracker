import "dotenv/config"
import { MongoClient } from "mongodb"


const MONGO_URI = process.env.MONGO_URI

const connection = new MongoClient(MONGO_URI)



try{
    await connection.connect()
    console.log("connected...");
    

}catch(err){
    console.log(err)
}




const db = connection.db("score_tracker");


export const scores = db.collection("scores");
