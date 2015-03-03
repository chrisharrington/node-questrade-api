"use strict";

var express = require("express"),
	app = express(),
	config = require("../config"),
	fs = require("fs"),
	https = require("https");

var privateKey = fs.readFileSync("private.key"),
	certificate = fs.readFileSync("cert.crt");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    next();
});

require("./routes")(app);

https.createServer({
	key: privateKey,
	cert: certificate
}, app).listen(config.server.port);