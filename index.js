const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const socketIO = require('socket.io');
const io = socketIO(server);

app.use(express.static(__dirname + '/web-chat/dist/web-chat'));

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
        console.log(message);
        io.emit(message);
    });
});

server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});



// server = http.listen(3000, function() {
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log('Server listening on: ' + host + 'port: ' + port);
// })