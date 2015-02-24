"use strict";

var Questrade = require("../../index"),
	config = require("../../config");

module.exports = function(app) {
	app.get("/positions", function(request, response) {
		Questrade.build(config.accountNumber).then(function(questrade) {
			questrade.accounts.positions().then(function(result) {
				response.send(result);
			}).catch(function(error) {
				response.send(500, error);
			});
		});
	});
};