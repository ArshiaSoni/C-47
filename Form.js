class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html('Hurdle Game');
        this.title.position(width/2, 50);

        this.input.position(width/2, 150);

        this.button.position(width/2, 200);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            this.greeting.html('Hello '+ player.name);
            this.greeting.position(width/2, 150);
            playerCount++;
            player.index = playerCount;
            player.updatePlayerCount(player.index);
            player.updatePlayerInfo();
        })
    }
}