const mathEngines = require('./math-engines.js')
const species = require('./species.js')
const playerConfig = require('./player-config.js')

const Game = new playerConfig.NewGame()

const ThrowDice = new mathEngines.mathEngines()



Game.setCharacters()


while (Game.numberofPlayers>1){
    for(let i=0;i<Game.numberofPlayers;i++){
        for(let j=0;j<Game.numberofPlayers;j++){
            
            console.log(`--------------Status----------------`)
if(Game.character[j].isHurt){console.log(`${Game.character[j].name} is bleeding and will take 2 extra damage!`); Game.character[j].healthPoints-=2}
console.log(`---Player---: ${Game.playerName[j]}
---Character Name---: ${Game.character[j].name}
---Character Species---: ${Game.character[j].type}
 ---Character Attack---: ${Game.character[j].attack}
---Character Defense---: ${Game.character[j].defense}\n---Character HP---: ${Game.character[j].healthPoints}
`)
            let readlineSync = require('readline-sync')
            readlineSync.question('Press enter to continue...\n\n\n')
            console.clear()
        }

       
        let readlineSync = require('readline-sync'),
            options = Game.playerName,
            index = readlineSync.keyInSelect(options, `${Game.playerName[i]}, choose another player to attack: `);
            if(index<0)
                    process.exit()
        console.clear()

        if(Game.character[index].alive == false){
            while(Game.character[index].alive == false){
                    options = Game.playerName,
                    index = readlineSync.keyInSelect(options, `${Game.playerName[index]} is dead. ${Game.playerName[i]}, choose another player to attack: `);
                    if(index<0)
                    process.exit()
            console.clear()
            }
        }

        console.log(`${Game.playerName[i]} attacks ${Game.playerName[index]}! Let's roll the dice!`)
        readlineSync.question('Press enter to continue...')
        ThrowDice.dice()
        console.log(`The dice rolled into ${ThrowDice.num}, so your attack will be multiplied by ${ThrowDice.multiplier}: ${ThrowDice.multiplier}*${Game.character[i].attack} = ${ThrowDice.multiplier*Game.character[i].attack}`)
        atkdmg=Game.character[i].attack*ThrowDice.multiplier
        readlineSync.question('Press enter to continue...')
        console.clear()

        console.log(`It's time for ${Game.playerName[index]} to defend against ${Game.playerName[i]} attack! Let's roll the dice!`)
        readlineSync.question('Press enter to continue...')
        ThrowDice.dice()
        console.log(`The dice rolled into ${ThrowDice.num}, so your defense will be multiplied by ${ThrowDice.multiplier}: ${ThrowDice.multiplier}*${Game.character[index].defense} = ${ThrowDice.multiplier*Game.character[index].defense}!`)
        
        defvalue=Game.character[index].defense*ThrowDice.multiplier
        totaldmg = atkdmg - defvalue
        if(totaldmg<=0){
            console.log(`This attack have no effect, as the defense (${defvalue}) is higher than (or equals to)  attack (${atkdmg})!

Actually, the high defense of ${Game.character[index].name} made ${Game.character[i].name} bleed, and it will suffer 2 damage per round`)

            Game.character[i].isHurt=true
            readlineSync.question('Press enter to continue...')
        }
        else{
            console.log(`This combat results in ${atkdmg} attack for ${Game.playerName[i]} and ${defvalue} defense for ${Game.playerName[index]}, meaning ${totaldmg} of total damage!`)
            console.log(`${Game.character[index].name} now has ${Game.character[index].healthPoints} - ${totaldmg} = ${Game.character[index].healthPoints-(totaldmg)} Health Points`)
            Game.character[index].healthPoints = Game.character[index].healthPoints - totaldmg
            readlineSync.question('Press enter to continue...')
        }
        
        
        if(Game.character[index].healthPoints <= 0){
            Game.character[index].alive = false
            Game.numberofPlayers = Game.numberofPlayers - 1
            console.clear()
            console.log(`${Game.character[index].name} is dead... ${Game.playerName[index]} is out of the Game.`)
            readlineSync.question('Press enter to continue...')
        }
        
        console.clear()
        }
    }

console.log("Game is over!")

for (let i=0;i<Game.playerName.length;i++){
    if(Game.character[i].alive == true)
        console.log(`${Game.playerName[i]} wins the game!`)
}

