var qwest = require("qwest"),
	config = require("config");

module.exports = function(method, collection) {
	this.execute = function(data) {
		return qwest[method](config.serviceLocation + collection).then(function(result) {
			return JSON.parse(result);	
		});
	};
};