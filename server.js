var http = require('http').createServer(handler);
var fs = require('fs');
var io = require('socket.io')(http);
var pshell = require('python-shell');
var motor = new pshell('s1.py', { mode: 'json '});

http.listen(8080);

function handler(req, res) {
    fs.readFile(__dirname + '/public/index.html', function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}

io.sockets.on('connection', function (socket) {
    socket.on('motor', function(data) {
        console.log("motor")
        console.log(data);    
        if(data == "1") {
            motor.send("F");
        } 
        else if(data == "0") {
            motor.send("stop");
        }
        else if(data == "2") {
            motor.send("B");
        }
    });
    socket.on('shutdown', function(data) {
      motor.send("shutdown");
    });
});