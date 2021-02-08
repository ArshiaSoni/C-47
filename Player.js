class Player{
    constructor(){
        this.name = null;
        this.xPos = 0;
        this.yPos = 0;
        this.index = 0;
        this.rank = 0;
    }

    getPlayerCount(){
        database.ref('playerCount').on('value', function(data){
            playerCount = data.val();
            console.log(playerCount);
        })
    }

    updatePlayerCount(count){
        database.ref('/').update({playerCount: count})
    }

    updatePlayerInfo(){
        database.ref('players/player' + this.index).update({
            name: this.name, 
            xPos: this.xPos,
            yPos: this.yPos,
            index: this.index,
            rank: this.rank
        })
    }

    static getPlayerInfo(){
        database.ref('players').on('value', function(data){
            allPlayers = data.val();
            console.log(allPlayers);
        })
    }
}