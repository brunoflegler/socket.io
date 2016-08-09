var net = require('net');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var app = net.createServer(function (socket) {
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
    //socket.write('Welcome to the Telnet server!');

    // Add a 'close' event handler to this instance of socket
    socket.on('close', function(data) {
        console.log('CLOSED');
    });

    // Add a 'data' event handler to this instance of socket
    socket.on('data', function(data) {
        console.log('DATA ' + socket.remoteAddress + ': ' + data);
    });
});



app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);



