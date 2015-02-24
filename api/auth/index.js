var https = require("https"),
	Promise = require("bluebird"),
	config = require("../config"),
	util = require("util"),
	
	persist = require("./persist");

module.exports = new function() {
	
	var _refresh, _access, _url;
	
	this.init = function() {
		return persist.restore().then(function(result) {
			return _refreshToken(result.refresh_token);
		}.bind(this));
	};
	
	this.getApiUrl = function() {
		return _url;	
	};
	
	this.getAccessToken = function() {
		return _access;	
	};
	
	function _refreshToken(token) {
		return new Promise(function(resolve, reject) {
			https.request({
				hostname: config.hostname,
				path: util.format(config.path, token)
			}, function(response) {
				var body = "";
				
				response.on("data", function(chunk) {
					body += chunk;
				});
				
				response.on("end", function() {
					if (response.statusCode !== 200)
						reject(response.statusCode);
					else {
						var parsed = JSON.parse(body);
						_refresh = parsed.refresh_token;
						_access = parsed.access_token;
						_url = parsed.api_server.replace("https://", "").replace("/", "");
						
						persist.save(parsed);

						setTimeout(function() {
							_refreshToken(_refreshToken);
						}.bind(this), ((parsed.expires_in-(5*60))*1000));
						
						resolve();
					}
				}.bind(this));
			}).end();
		}.bind(this));
	}
	
};