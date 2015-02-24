var Promise = require("bluebird"),
	https = require("https"),
	
	auth = require("../auth");

module.exports = function(path) {
	return new Promise(function(resolve, reject) {
		https.request({
			hostname: auth.getApiUrl(),
			path: path,
			headers: {
				"Authorization": "Bearer " + auth.getAccessToken()	
			}

		}, function(response) {
			var body = "";
			response.on("data", function(data) {
				body += data;
			});
			response.on("end", function() {
				resolve(JSON.parse(body));
			});
		}).end();
	});
};