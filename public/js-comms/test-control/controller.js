/* global connectRTC */

"use strict";

angular.module("rtc-proto")
.service("RTCService", ["CLIENT", function(CLIENT) {
  return connectRTC(CLIENT);
}])
.controller("QRCtrl", ["$scope", "$state", "RTCService", function($scope, $state, RTCService) {
  RTCService.onClientSessionStarted = function() {
    $state.go("test-display");
  };

  $scope.getTime = function() {
    return new Date().getTime();
  };
}])
.controller("TestDisplayCtrl", ["$scope", "$state", "$timeout", "RTCService", 
function($scope, $state, $timeout, RTCService) {
  $scope.timeoutPromise = null;

  $scope.resetTimeout = function() {
    if($scope.timeoutPromise !== null) {
      $timeout.cancel($scope.timeoutPromise);
    }

    $scope.timeoutPromise = $timeout(function() {
      $state.go("qr-code");
    }, 10000);
  };

  $scope.initServer = function() {
    // Initialize
    if(!RTCService.isClient()) {
      $scope.resetTimeout();

      RTCService.bind("#button1", "click", function() {
        $("#test-display-iframe").src = "http://www.google.com";
      });

      RTCService.bind("#button2", "click", function() {
        $("#test-display-iframe").src = "http://www.arstechnica.com";
      });

      RTCService.bind("#button3", "click", function() {
        $("#test-display-iframe").src = "http://www.techcrunch.com";
      });

      RTCService.bind("#button4", "click", function() {
        $("#test-display-iframe").src = "http://www.slashdot.org";
      });
    }
  };

  RTCService.onClientSessionStarted = function() {
    $scope.initServer();
  };
}])
;
