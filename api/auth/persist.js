var Promise = require("bluebird"),
	fs = Promise.promisifyAll(require("fs"));

module.exports = (new function() {
	
	var FILENAME = "api/tokens.json";
	
	this.save = function(data) {
		return fs.writeFileAsync(FILENAME, JSON.stringify(data));
	};
	
	this.restore = function() {
		return fs.readFileAsync(FILENAME).then(function(contents) {
			return JSON.parse(contents);
		});
	};
	
});