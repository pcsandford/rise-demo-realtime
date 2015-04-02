/* global process, __dirname */

"use strict";

var path = require("path");
var forever = require("forever-monitor");

var child = new (forever.Monitor)(path.join(__dirname, "server.js"), {
  killTree: true,
  args: process.argv.slice(2)
});

child.on("exit", function () {
  console.log("The server.js process has been stopped");
});

process.on("SIGINT", function() {
  forever.kill(child.childData.pid, true, "SIGKILL", function() {
    process.exit();
  });
});

child.start();
