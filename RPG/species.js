const mE = require('./math-engines.js')

const mathEngines = new mE.mathEngines()

exports.Mage = class Mage{
    constructor(name){
        this.attack = 10//mathEngines.between(4,7)*2 //Mages attack's varies between 2 and 6
        this.defense=10 //Math.round(this.attack/2) //Mages defense's is half the attack
        this.healthPoints=100
        this.name=name
        this.type="Mage"
        this.alive = true
        this.isHurt = false
        this.strength='very strong'
        // if(this.attack == 8) this.strength = 'weak'
        // else if(this.attack == 10) this.strength = 'medium'
        // else if(this.attack == 12) this.strength = 'strong'
        // else this.strength = 'very strong'
    }
}

exports.Warrior = class Warrior{
    constructor(name){
        this.defense = 10 //mathEngines.between(4,7)*2
        this.attack=10 //Math.round(this.defense/2) 
        this.healthPoints=100
        this.name=name
        this.type="Warrior"
        this.alive = true
        this.isHurt = false
        this.strength='very strong'

        // if(this.defense == 8) this.strength = 'weak'
        // else if(this.defense == 10) this.strength = 'medium'
        // else if(this.defense == 12) this.strength = 'strong'
       
      
    }
}

exports.Druid = class Druid{
    constructor(name){
        this.attack = 10 //9
        this.defense=10 //7
        this.healthPoints=100
        this.name=name
        this.type="Druid"
        this.alive = true
        this.strength = 'very strong'
        this.isHurt = false
        
     
    }
}