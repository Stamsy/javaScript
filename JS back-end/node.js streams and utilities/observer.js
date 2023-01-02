// const subscribers = {};

// function subscribe(type, callback) {
//     console.log('new subscriber for ' + type);
//     if (subscribers[type] == undefined) {
//         subscribers[type] = [];
//     }
//     subscribers[type].push(callback);
// }

// function publish(type, data) {
//     console.log('received' + type);
//     const currentSubscribers = subscribers[type];

//     if (currentSubscribers) {
//         for (let subscriber of currentSubscribers) {
//             subscriber(data);
//         }
//     }
// }

// module.exports = {
//     subscribe,
//     publish
// };

const http = reqire('http');

const server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        res.write('OK');
        res.end();
    } else if (req.method == 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log(body.join(''));
            res.end(); 
        });
    }

});

server.listen(3000);