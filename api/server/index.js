"use strict";

var express = require("express"),
	app = express(),
	config = require("../config");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    next();
});

require("./routes")(app);

app.listen(config.server.port, function() {
	console.log("Questrade API server listening on port %s...", config.server.port);
});