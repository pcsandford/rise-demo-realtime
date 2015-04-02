/* global connectRTC */

"use strict";

angular.module("rtc-proto")
.service("RTCService", ["CLIENT", function(CLIENT) {
  return connectRTC(CLIENT);
}])
.controller("QRCtrl", ["$scope", "$state", "RTCService", function($scope, $state, RTCService) {
  RTCService.onClientSessionStarted = function() {
    $state.go("tap-and-drag");
  };

  $scope.getTime = function() {
    return new Date().getTime();
  };
}])
.controller("TapAndDragCtrl", ["$scope", "$state", "$timeout", "RTCService", 
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

  $scope.translateButton = function(x, y, absolute) {
    var button = $("#mainButton");
    var offsetX = absolute ? 0 : button.position().left;
    var offsetY = absolute ? 0 : button.position().top;

    button.css({ left: offsetX + x, top: offsetY + y, position: "absolute" });
  };

  $scope.initServer = function() {
    // Initialize
    if(!RTCService.isClient()) {
      $scope.resetTimeout();

      RTCService.bind("#mainButton", "click", function(e) {
        console.log("Received event", e);

        $scope.translateButton(10, 10);
        $scope.resetTimeout();
      });
    }
  };

  RTCService.onClientSessionStarted = function() {
    $scope.translateButton(10, 10, true);
    $scope.initServer();
  };

  $scope.initServer();
}])
;
