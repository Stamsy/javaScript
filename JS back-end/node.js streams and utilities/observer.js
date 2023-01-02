const subscribers = {};

function subscribe(type, callback) {
    console.log('new subscriber for ' + type);
    if (subscribers[type] == undefined) {
        subscribers[type] = [];
    }
    subscribers[type].push(callback);
}

function publish(type, data) {
    console.log('received' + type);
    const currentSubscribers = subscribers[type];

    if (currentSubscribers) {
        for (let subscriber of currentSubscribers) {
            subscriber(data);
        }
    }
}

module.exports = {
    subscribe,
    publish
};