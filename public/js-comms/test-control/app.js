"use strict";

angular.module("rtc-proto",
  ["ui.router"])
.config(["$provide", "$urlRouterProvider", "$stateProvider",
  function($provide, $urlRouterProvider, $stateProvider) {
    var CLIENT = (window.location.href.indexOf("client=true") >= 0);

    $provide.value("CLIENT", CLIENT);

    if(CLIENT) {
      $urlRouterProvider.otherwise("/test-control");
    }
    else {
      $urlRouterProvider.otherwise("/qr-code");
    }

    $stateProvider
    .state("qr-code", {
      url: "/qr-code",
      templateUrl: "partials/qr-code.html"
    })
    .state("test-control", {
      url: "/test-control",
      templateUrl: "test-control.html"
    })
    .state("test-display", {
      url: "/test-display",
      templateUrl: "test-display.html"
    });
  }
])
;
