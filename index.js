var io = require('socket.io-client');
const socket = io.connect('http://0.0.0.0:3000', { reconnect: true });

class SocketCli {
    constructor() {
        this.apiKey = null
    }

    initial(apiKey) {
        if (typeof (apiKey) == "string") {
            this.apiKey = apiKey
            socket.emit("setApiKey", apiKey)
        }
    }

    increment(metric = null, count = 1) {
        if (typeof (metric) == 'string' && typeof (count) == 'number' && count > 0) {
            socket.emit('increment', { metric, count, apiKey: this.apiKey })
        }
    }
    decrement(metric = null, count = 1) {
        if (typeof (metric) == 'string' && typeof (count) == 'number' && count > 0) {
            socket.emit('decrement', { metric, count, apiKey: this.apiKey })
        }
    }

}

module.exports = new SocketCli;
