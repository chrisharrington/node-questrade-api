var get = require("../base/get");

module.exports = function(accountNumber) {
	return get("/v1/accounts/" + accountNumber + "/balances");
};