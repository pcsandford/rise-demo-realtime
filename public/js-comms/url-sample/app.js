"use strict";

angular.module("rtc-proto",
  ["ui.router"])
.config(["$provide", "$urlRouterProvider", "$stateProvider",
  function($provide, $urlRouterProvider, $stateProvider) {
    var CLIENT = (window.location.href.indexOf("client=true") >= 0);

    $provide.value("CLIENT", CLIENT);

    if(CLIENT) {
      $urlRouterProvider.otherwise("/anchor-sample-1");
    }
    else {
      $urlRouterProvider.otherwise("/qr-code");
    }

    $stateProvider
    .state("qr-code", {
      url: "/qr-code",
      templateUrl: "partials/qr-code.html"
    })
    .state("anchor-sample-1", {
      url: "/anchor-sample-1",
      templateUrl: "partials/anchor-sample-1.html"
    })
    .state("anchor-sample-2", {
      url: "/anchor-sample-2",
      templateUrl: "partials/anchor-sample-2.html"
    })
    .state("anchor-sample-3", {
      url: "/anchor-sample-3",
      templateUrl: "partials/anchor-sample-3.html"
    });
  }
])
;
