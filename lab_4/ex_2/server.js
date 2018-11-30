const os = require('os');

const core = os.cpus().length;
const ram = Math.round(os.totalmem() / (1024 * 1024 * 1024));
const machine = {core: core, ram: ram};

console.log("Checking your system");

function checkSystem(machine) {
    if (machine.core < 2)
        return "Processor is not supported";
    if (machine.ram < 4)
        return "This app needs at least 4GB of RAM";
    return "System is checked successfully";
}

const {from} = require('rxjs');
const {map} = require('rxjs/operators');

const data = [machine];

from(data)
    .pipe(
        map((machine) => checkSystem(machine))
    )
    .subscribe(
        (obj) => console.log(obj)
    );