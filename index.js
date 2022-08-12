var io = require('socket.io-client');
const socket = io.connect('http://localhost:3000', { reconnect: true });


exports.initial = (ApiKey , callback) => {
    if(typeof(ApiKey) == "string"){
        socket.emit("setApiKey", ApiKey)
        callback("Initialize is successful.")
    }else{
        callback(new Error("ApiKey must be a String!"))
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


