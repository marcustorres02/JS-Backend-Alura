exports.mathEngines = class MathEngines{
    constructor(){
        this.num=0
        this.multiplier=0
    }
    between (min,max) {
        return Math.floor(Math.random()*(max-min)+min); //Generates a random number between min and max-1
    }
    dice() {    
        for (let i=0;i<100;i++){
            const sab = new SharedArrayBuffer(1024);
            const int32 = new Int32Array(sab);
            console.log(this.between(1,21))
            Atomics.wait(int32, 0, 0 , 2);
            console.clear()
                  }           
        this.num = this.between(1,21)
        if (this.num<1) this.multiplier=0
        else if (this.num<=4) this.multiplier=1
        else if (this.num<=10) this.multiplier=2
        else if (this.num<=16) this.multiplier=3
        else if (this.num<=19) this.multiplier=4
        else this.multiplier=5
    
    }
}

