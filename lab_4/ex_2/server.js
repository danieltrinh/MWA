const {Observable} = require('rxjs');
const os = require('os');

const checkSystem$ = Observable.create(function(observer){
    observer.next("Checking your system");

    const core = os.cpus().length;
    const ram = Math.round(os.totalmem() / (1024 * 1024 * 1024));

    if(core < 20)
        observer.error('Processor is not supported');
    if(ram < 4)
        observer.error("This app needs at least 4GB of RAM");

    observer.complete();
});

const subscribe = checkSystem$.subscribe(
    (x) => console.log(x),
    (err) => console.log(err),
    () => console.log('System is checked sucessfully')
);

