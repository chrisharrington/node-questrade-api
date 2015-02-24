var auth = require("./auth");

module.exports = {
	build: function(accountNumber) {
		return auth.init().then(function() {
			return {
				accounts: require("./accounts")(accountNumber)
			};
		});
	}
};