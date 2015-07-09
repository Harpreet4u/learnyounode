var fs = require("fs");
var path = require("path");

module.exports = function(dirname, extname, callback) {
	var extension = "." + extname;
	fs.readdir(dirname, function(err, files) {
		if (err) {
			return callback(err, null);
		}
		var files = files.filter(function(file) {
			return path.extname(file) === extension;
		});
		return callback(null, files);
	});
}
