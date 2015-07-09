var fs = require("fs"), path = require("path");

fs.readdir(process.argv[2], function(err, files){
	if (err) {
		throw err;
	}

	var files = files.filter(function(file) {
		return path.extname(file) === "."+process.argv[3];
	});
	for (var i = 0; i < files.length; i++) {
		console.log(files[i]);
	}
});
