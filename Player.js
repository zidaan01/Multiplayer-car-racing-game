class Player{

    constructor(){
this.name = null;
this.distance = 0;
this.rank = null;
this.index = null;
    
    
    }
    getCount(){
        database.ref("playerCount").on("value", function(data){

            playerCount= data.val()
            
            
            })


    }
    updateCount(count){
        
        database.ref("/").update({

            playerCount:count
            
            })
        



    }
    update(){

    database.ref("players/player"+player.index).set({
    name:this.name, 
    distance:this.distance
    })
    



    }
getallplayerinfo(){
  database.ref("players").on("value",function(data){
playerdata = data.val();
  })  
}
}