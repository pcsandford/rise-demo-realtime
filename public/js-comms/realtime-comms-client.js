/* global Primus */
/* exported connectRTC */

"use strict";

function connectRTC(client) {
  var primus = new Primus("http://realtime.risevision.com");
  var eventHandlers = {};
  var manager = new RTCManager(client, primus, eventHandlers);

  if(!client) {
    primus.send("server-init", {});

    primus.on("start-server-session", function(data, ack) {
      ack();

      if(manager.onClientSessionStarted) {
        manager.onClientSessionStarted();
      }
    });
  }
  else {
    primus.send("client-init", {});
  }

  primus.on("server-message", function(data) {
    if(data.messageName === "bind-event") {
      $(data.selector).bind(data.eventName, function(e) {
        primus.send("client-message", {
          messageName: "emitted-event",
          selector: data.selector,
          eventName: data.eventName,
          event: {
            data: e.data,
            metaKey: e.metaKey,
            pageX: e.pageX,
            pageY: e.pageY,
            timeStamp: e.timeStamp,
            type: e.type,
            which: e.which
          }
        });
      });
    }
    else if(data.messageName === "listen-url-changes") {
      $(window).on("hashchange", function(e) {
        primus.send("client-message", {
          messageName: "url-changed",
          oldURL: e.oldURL,
          newURL: e.newURL,
          hash: window.location.hash
        });
      });
    }
  });

  primus.on("client-message", function(data) {
    if(data.messageName === "emitted-event") {
      if(eventHandlers[data.selector + data.eventName]) {
        eventHandlers[data.selector + data.eventName](data.event);
      }
    }
    else if(data.messageName === "url-changed") {
      window.location.hash = data.hash;
    }
  });

  return manager;
}

function RTCManager(client, primus, eventHandlers) {
  return {
    isClient: function() {
      return client;
    },
    bind: function(selector, eventName, callback) {
      eventHandlers[selector + eventName] = callback;

      primus.send("server-message", {
        messageName: "bind-event",
        selector: selector,
        eventName: eventName
      });
    },
    listenUrlChanges: function() {
      primus.send("server-message", {
        messageName: "listen-url-changes"
      });
    }
  };
}
