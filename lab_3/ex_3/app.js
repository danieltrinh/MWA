const EvenEmmiter = require('events');

class Gym extends EvenEmmiter{
    constructor(){
        super();
    }
}

const gym = new Gym();

gym.on('go',() => console.log("Athlete is working out"));

setInterval(() => gym.emit('go'), 1000);
