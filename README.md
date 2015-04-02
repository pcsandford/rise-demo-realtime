Rise Vision Prototype for Realtime Communications
==============

**Copyright © 2015 - Rise Vision Incorporated.**

## Usage

HTML files, Javascript and CSS should be placed inside the public directory.

Reference both js/lib_primus.js and js/realtime-comms-client.js in your HTML page.

Connect to the real time service using:

    var rtcService = connectRTC(client);

*client* is used to indicate if this instance is going to be controlled remotely (server, client=false) or if it is going to be controlling a remote server (client, client=true)

After connecting to the real time service, the server should bind to remote events on the client. This can be done with:

    rtcService.bind(selector, event, callback);

As an example:

    rtcService.bind("#mainButton", "click", function(e) {
      console.log("A button has been pressed on the client", e);
    });

As a helper function, rtcService has isClient() to test for operation mode.

## Real time server

A local real time server can be started with:

    node run.js local

This will start a server running at http://localhost:3000. The address returned by /qr-code will not be valid. To test this scenario, code must be pushed to GitHub, which will force a deploy to https://realtime.risevision.com
