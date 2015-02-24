"use strict";

var Questrade = require("../../index"),
	config = require("../../config");

module.exports = function(app) {
	app.get("/glance", function(request, response) {
		Questrade.build(config.accountNumber).then(function(questrade) {
			questrade.accounts.glance().then(function(result) {
				response.send(result);
			}).catch(function(error) {
				response.status(500).send(error);
			});
		});
	});
};