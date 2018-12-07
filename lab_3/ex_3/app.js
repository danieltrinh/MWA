const EvenEmmiter = require('events');

class Gym extends EvenEmmiter{
    constructor(){
        super();
    }
    go(){
        setInterval(()=>this.emit('go'), 1000);
    }
}

const gym = new Gym();

gym.on('go',() => console.log("Athlete is working out"));
gym.on('go',() => console.log("Athlete is tired"));

gym.go();
