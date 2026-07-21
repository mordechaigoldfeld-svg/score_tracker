






export function isValidBodyKeys(body) {
    try{
        if(body.playerName && body.game && body.points){
            return true         
        }
        return false

    }catch(err){
        console.log(err)
    }
    
}


export function isValidGame(game) {
    try{

        const validGames = ["tetris", "snake", "space invaders"];
                
        if( validGames.includes(game.toLowerCase())){
            return true         
        }
        return false

    }catch(err){
        console.log(err)
    }   
}

export function isValidType(key,type) {
    try{
        if(typeof(key)===type){
            return true         
        }
        return false

    }catch(err){
        console.log(err)
    }   
}






