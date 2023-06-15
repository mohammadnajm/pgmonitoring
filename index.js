var io = require('socket.io-client');
const socket = io.connect('http://0.0.0.0:7896', { reconnect: true });

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

    distribution(metric = null, count = 1) {
        if (typeof (metric) == 'string' && typeof (count) == 'number') {
            socket.emit('distribution', { metric, count, apiKey: this.apiKey })
        }
    }

    systemInfo_increment(metric = null, count = 1) {
        if (typeof (metric) == 'string' && typeof (count) == 'number' && count > 0) {
            socket.emit('systemInfo_increment', { metric, count, apiKey: this.apiKey })
        }
    }
    systemInfo_decrement(metric = null, count = 1) {
        if (typeof (metric) == 'string' && typeof (count) == 'number' && count > 0) {
            socket.emit('systemInfo_decrement', { metric, count, apiKey: this.apiKey })
        }
    }

    systemInfo_distribution(metric = null, count = 1) {
        if (typeof (metric) == 'string' && typeof (count) == 'number') {
            socket.emit('systemInfo_distribution', { metric, count, apiKey: this.apiKey })
        }
    }
    systemInfo_percent(metric = null, count = 1) {
        if (typeof (metric) == 'string' && typeof (count) == 'number') {
            socket.emit('systemInfo_percent', { metric, count, apiKey: this.apiKey })
        }
    }



}

module.exports = new SocketCli;
