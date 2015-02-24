"use strict";

var Questrade = require("../../index"),
	config = require("../../config");

module.exports = function(app) {
	app.get("/balances", function(request, response) {
		Questrade.build(config.accountNumber).then(function(questrade) {
			questrade.accounts.balances().then(function(result) {
				response.send(result);
			}).catch(function(error) {
				response.send(500, error);
			});
		});
	});
};