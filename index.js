var io = require('socket.io-client');
const socket = io.connect('http://localhost:3000', { reconnect: true });


exports.initial = (ApiKey) => {
    if(typeof(ApiKey) == "string"){
        socket.emit("setApiKey", ApiKey)
    }
}

exports.increment = (metric = null , count = 1) => {
    if(typeof(metric) == 'string' && typeof(count) == 'number' && count > 0){
        socket.emit('increment', { metric,count})
    }
}

exports.decrement =  (metric = null , count = 1) => {
    if(typeof(metric) == 'string' && typeof(count) == 'number' && count > 0){
        socket.emit('decrement', { metric,count})
    }
}
