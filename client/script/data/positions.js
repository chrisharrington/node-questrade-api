"use strict";

var Command = require("./base/command");

module.exports = {
	get: function() {
		return new Command("get", "positions").execute();
	}
};