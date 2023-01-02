const { subscribe } = require('./observer');

let runningTotal = 0;

subscribe('message', (data) => {
    runningTotal += data;
console.log('current runnig total is', runningTotal);
});