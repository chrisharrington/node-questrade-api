var Questrade = require("../../../api"),
	config = require("../../../api/config.json");

Questrade.build(config.accountNumber).then(function(questrade) {
	questrade.accounts.positions().then(function(result) {
		console.log(result);
	}).catch(function(error) {
		console.log(error);
	});
});