"use strict";

angular.module("rtc-proto",
  ["ui.router"])
.config(["$provide", "$urlRouterProvider", "$stateProvider",
  function($provide, $urlRouterProvider, $stateProvider) {
    var CLIENT = (window.location.href.indexOf("client=true") >= 0);

    $provide.value("CLIENT", CLIENT);

    if(CLIENT) {
      $urlRouterProvider.otherwise("/tap-and-drag");
    }
    else {
      $urlRouterProvider.otherwise("/qr-code");
    }

    $stateProvider
    .state("qr-code", {
      url: "/qr-code",
      templateUrl: "partials/qr-code.html"
    })
    .state("tap-and-drag", {
      url: "/tap-and-drag",
      templateUrl: "partials/tap-and-drag.html"
    });
  }
])
;
