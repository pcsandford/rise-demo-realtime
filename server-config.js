"use strict";

var winston = require("winston");

// Init global Winston logger
winston.loggers.add("dev", {
  console: {
    level: "debug",
    colorize: "true",
    label: "dev"
  },
  file: {
    filename: "dev.log"
  }
});

// Init Express requests Winston logger
winston.loggers.add("express", {
  file: {
    level: "error",
    label: "express",
    filename: "express.log"
  }
});
