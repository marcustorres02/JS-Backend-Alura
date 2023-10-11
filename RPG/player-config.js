const readlineSync = require('readline-sync')
const species = require('./species.js')

exports.NewGame = class NewGame {
    constructor(){
        this.character=[]
        this.playerName=[]
        this.numberofPlayers=0
    }
    setCharacters(){
        console.clear()
        this.numberofPlayers = readlineSync.question('How many players will play this game? ');
        for (let i=0;i<this.numberofPlayers;i++){
            this.playerName[i]=readlineSync.question(`Player ${i+1}, may I have your name?  `);
        }
        console.clear()
        for (let i=0;i<this.numberofPlayers;i++){
            let readlineSync = require('readline-sync'),
            options = ['Mage', 'Warrior', 'Druid'],
            index = readlineSync.keyInSelect(options, `${this.playerName[i]}, please select a class type: `);
            let characterName = readlineSync.question(`${this.playerName[i]}, what is the name of your character? `);
            if(index==0) {this.character[i] = new species.Mage(characterName)}
            else if(index==1) {this.character[i] = new species.Warrior(characterName)}
            else if(index==2) {this.character[i] = new species.Druid(characterName)}
            else process.exit()
        
            console.log(`${this.playerName[i]} created a ${this.character[i].type} called ${this.character[i].name}. That's a ${this.character[i].strength} ${this.character[i].type}!`)
            readlineSync.question('Press enter to continue...')
            console.clear()

                    }
    }
  
}



