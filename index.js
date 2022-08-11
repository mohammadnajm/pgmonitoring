var io = require('socket.io-client');
const socket = io.connect('http://localhost:3000', { reconnect: true });


exports.initial = (ApiKey) => {
    socket.emit("setApiKey", ApiKey)

}
exports.sendmetric = (names , count=1)=> {
    console.log(names)
    socket.emit('save_metrics', { name: names ,count :count})
}


