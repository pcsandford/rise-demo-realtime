/* global __dirname */

"use strict";

var Primus = require("primus");
var emitter = require("primus-emitter");
var latency = require("primus-spark-latency");
var serverSpark = null;
var clientSpark = null;

exports.init = function(server) {
  var primus = new Primus(server, { transformer: "SockJS", use_clock_offset: true });
  
  primus.use("emitter", emitter);
  primus.use("spark-latency", latency);
  
  primus.save(__dirname + "/public/js/lib_primus.js");
  
  primus.on("disconnection", function(spark) {
    if(spark === serverSpark) {
      serverSpark = null;
    }
    else if(spark === clientSpark) {
      clientSpark = null;
    }
  });
  
  primus.on("connection", function(spark) {
    function initServer (data) {
      if(serverSpark && clientSpark) {
        serverSpark.send("start-server-session", data, function() {
          spark.send("start-client-session", {});
        });
      }
    }
  
    spark.on("server-init", function () {
      if(serverSpark) {
        serverSpark.end();
      }
  
      serverSpark = spark;
      initServer({});
    });
  
    spark.on("client-init", function (data) {
      if(clientSpark) {
        clientSpark.end();
      }
  
      clientSpark = spark;
      initServer(data);
    });
  
    spark.on("server-message", function(data) {
      if(clientSpark) {
        clientSpark.send("server-message", data);
      }
    });
  
    spark.on("client-message", function(data) {
      if(serverSpark) {
        serverSpark.send("client-message", data);
      }
    });
  });
};
