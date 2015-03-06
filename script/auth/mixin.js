var Auth = require("./index");

module.exports = {
	isSignedIn: function() {
		return Auth.isSignedIn();
	}
};