const { publish } = require('./observer');

let counter = 0; 

setInterval(() => { 
    publish('message', counter);
    counter++;
}, 2000);