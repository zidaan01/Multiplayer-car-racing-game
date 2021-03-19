class Game{

constructor(){

}
getState(){
database.ref("gameState").on("value", function(data){

gameState = data.val()


})


}
updateState(state){
database.ref("/").update({

gameState:state

})


}
start(){
if(gameState==0){

    player = new Player();
    player.getCount();
    form = new Form();
    form.display();



}
car1 = createSprite(400, 500, 50, 50);
car1.addImage(car1image);
car2 = createSprite(600, 500, 50, 50);
car2.addImage(car2image);
car3 = createSprite(800, 500, 50, 50);
car3.addImage(car3image);
car4 = createSprite(1000, 500, 50, 50);
car4.addImage(car4image);
cars = [car1,car2,car3,car4];

}

play(){
background("grey");
image(trackimage, 0, -height*4, width, height*5)
form.greeting.hide();
player.getallplayerinfo();
console.log(playerdata);
textSize(25);
text("Game Starts", 100, 150);
var y = 200;
var index = 0;
for(var i in playerdata)
{
    
 
    cars[index].y = height - playerdata[i].distance;
    
    if(i === "player"+player.index)  // i ===player2
    {
        fill("lime");
        ellipse(cars[index].x, cars[index].y, 80, 80);
        camera.position.x = width/2;
        camera.position.y = cars[index].y;
    }
    // text(playerdata[i].name + " : " + playerdata[i].distance, 200, y)
    y = y + 30;
    index = index+1;     

}
if(keyDown(UP_ARROW)){
player.distance = player.distance + 10
player.update();
}
drawSprites();
if(player.distance >= 3640){
    gameState = 2;
}

}

end(){
    console.log("THE GAME HAS FINISHED")
}




}