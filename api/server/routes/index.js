"use strict";

module.exports = function(app) {
	require("./positions")(app);
	require("./balances")(app);
	require("./glance")(app);
};