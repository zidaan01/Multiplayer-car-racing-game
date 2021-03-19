class Form{
    constructor(){
this.title = createElement("h1");
this.inputbox = createInput("Enter your name");
this.button = createButton("PLAY");
this.greeting = createElement("h2");

    }
    display(){
this.title.html("CAR RACING GAME");
this.title.position(200, 100);
this.inputbox.position(200,200);
this.button.position(200,250);
this.button.mousePressed(()=>{
this.inputbox.hide();
this.button.hide();
player.name = this.inputbox.value();
this.greeting.html("Hello"+player.name);
this.greeting.position(200, 200);
playerCount = playerCount + 1;
player.updateCount(playerCount);
player.index = playerCount;
player.update()

});
}

}