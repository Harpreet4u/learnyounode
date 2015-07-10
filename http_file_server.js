var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	var buffer = fs.createReadStream(process.argv[3]);
	buffer.pipe(response);
});
server.listen(process.argv[2]);
