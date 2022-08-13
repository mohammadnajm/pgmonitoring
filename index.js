var io = require('socket.io-client');
const socket = io.connect('http://localhost:3000', { reconnect: true });

class SocketCli {
    constructor() {
        this.ApiKey = null
    }

    initial(ApiKey) {
        if (typeof (ApiKey) == "string") {
            this.ApiKey = ApiKey
            socket.emit("setApiKey", ApiKey)
        }
    }

    increment(metric = null, count = 1) {
        if (typeof (metric) == 'string' && typeof (count) == 'number' && count > 0) {
            socket.emit('increment', { metric, count, ApiKey: this.ApiKey })
        }
    }
    decrement(metric = null, count = 1) {
        if (typeof (metric) == 'string' && typeof (count) == 'number' && count > 0) {
            socket.emit('decrement', { metric, count, ApiKey: this.ApiKey })
        }
    }

}

module.exports = new SocketCli;
