var database;
var game;
var player;
var car1, car2, car3, car4, cars;
var playerdata;
var form;
var resetButton;
var gameState = 0, playerCount;
var car1image, car2image, car3image, car4image, trackimage;
function preload(){

    car1image = loadImage("images/car1.png");
    car2image = loadImage("images/car2.png");
    car3image = loadImage("images/car3.png");
    car4image = loadImage("images/car4.png");
    trackimage = loadImage("images/track.jpg");
    

}
function setup(){
    createCanvas(displayWidth, displayHeight-100);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    resetButton = createButton("Reset");
    resetButton.position(width-100,50);

    
}

function draw(){
   
if(playerCount == 4){
   game.updateState(1) 
}
if(gameState == 1){
    game.play();
}
if(gameState == 2){
    game.end();
}


resetButton.mousePressed(function(){
    database.ref("/").update({
        gameState:0,
        playerCount:0,
        players:""
    })
});
}

