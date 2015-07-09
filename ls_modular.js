var ls_module = require("./ls_modular_lib");

var dirname = process.argv[2];
var extension = process.argv[3];

ls_module(dirname, extension, function(err, files) {
	files.forEach(function(file){
		console.log(file);
	});
});
