var net = require("net");
var strftime = require("strftime");

var tcp = net.createServer(function(socket) {
	// "2013-07-06 17:42"
	socket.write(strftime("%F %H:%M", new Date())+"\n");
	socket.end();
	// or
	// socket.end(strftime("%F %H:%M", new Date())+"\n");
});
tcp.listen(process.argv[2])
