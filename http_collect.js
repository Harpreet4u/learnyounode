var http = require("http");
var buffer_list = require("bl");

http.get(process.argv[2], function(response){
	response.pipe(buffer_list(function(err, data){
		if (err)
			return console.error(err);
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});
