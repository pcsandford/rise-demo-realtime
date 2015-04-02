/* global process, __dirname */
/* exported serverConfig */

"use strict";

var SERVER_NAME = process.env.SERVER_NAME || "realtime.risevision.com";
var PORT = process.env.PORT || 443;

var http = require("http");
var https = require("https");
var fs = require("fs");
var path = require("path");

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var serveFavicon = require("serve-favicon");
var serveStatic = require("serve-static");
var winston = require("winston");
var serverConfig = require(path.join(__dirname, "server-config.js"));
var serverPrimus = require(path.join(__dirname, "server-primus.js"));
var log = winston.loggers.get("dev");
var qr = require("qr-image");
var app = express();
var server = null;
var transport = null;
var local = process.argv.length >= 3 && process.argv[2] === "local";

if(local) {
  server = http.createServer(app);
  transport = "http";
  PORT = 3000;
}
else {
  var options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.crt")
  };

  server = https.createServer(options, app);
  transport = "https";
}

// Init Primus
serverPrimus.init(server);

app.set("port", PORT);
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
// HTTP PUT and DELETE support
app.use(methodOverride());
// Use standard favicon
app.use(serveFavicon(__dirname + "/public/favicon.ico"));
// Static content
app.use(serveStatic(path.join(__dirname, "public")));

app.get("/qr-code", function(req, res) {
  var url = transport + "://" + SERVER_NAME + "/#/?client=true";
  var code = qr.image(url, { type: "png" });
  
  res.set("Cache-Control", "no-cache");
  res.type("png");
  code.pipe(res);
});

// Start HTTP server
server.listen(PORT, function() {
  if(local) {
    log.debug("Running on http://localhost:3000");
  }
  else {
    log.debug("Running on https://" + SERVER_NAME + ":" + PORT);
  }
});
