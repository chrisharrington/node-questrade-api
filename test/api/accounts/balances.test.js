var Questrade = require("../../../api"),
	config = require("../../../config.json");

Questrade.build(config.accountNumber).then(function(questrade) {
	questrade.accounts.balances().then(function(result) {
		console.log(result);
	}).catch(function(error) {
		console.log(error);
	});
});