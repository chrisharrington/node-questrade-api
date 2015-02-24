module.exports = function(accountNumber) {
	return {
		get: require("./get").bind(null, accountNumber),
		positions: require("./positions").bind(null, accountNumber),
		balances: require("./balances").bind(null, accountNumber),
		glance: require("./glance").bind(null, accountNumber)
	};
};