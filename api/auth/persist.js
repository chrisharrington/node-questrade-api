var Promise = require("bluebird"),
	fs = Promise.promisifyAll(require("fs"));

module.exports = (new function() {
	
	var FILENAME = "/../tokens.json";
	
	this.save = function(data) {
		return fs.writeFileAsync(__dirname + FILENAME, JSON.stringify(data));
	};
	
	this.restore = function() {
		return fs.readFileAsync(__dirname + FILENAME).then(function(contents) {
			return JSON.parse(contents);
		});
	};
	
});