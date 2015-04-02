"use strict";
/* global connectRTC */

var rtcService = null;

$(document).ready(function(){
  // Connects to Node.js as client (client = true)
  rtcService = connectRTC(true);
});
